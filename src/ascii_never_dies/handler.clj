(ns ascii-never-dies.handler
  (:require [compojure.core :refer :all]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [ring.adapter.jetty :as jetty]
            [environ.core :refer [env]]
            [clojure.java.jdbc :as db]
            [castra.core :as cas]
            [castra.middleware :refer [wrap-castra]]))

(def db-spec (str (env :database-url)
                  "?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory"))

(defn record [input]
  (db/insert! db-spec
              :game_data {:username input :password ""
                          :x 0 :y 0 :cur-health -1
                          :room-idx {0 0} :rooms []}))

(defn table-size []
  (:count (first (db/query db-spec
                           ["SELECT COUNT(*) FROM game_data"]))))

(cas/defrpc get-record [username]
  (first (db/query db-spec
                   ["SELECT * FROM game_data WHERE username = ?" username])))

(cas/defrpc update-record [content]
  (record content)
  (str "Success! Added: " (get-record content)))

(cas/defrpc save [username state]
  (let [{x :x y :y cur-health :cur-health} (:player state)
        room-idx (:room-idx state)
        rooms (:rooms state)]
    (db/update! db-spec :game_data
                {:x x :y y :cur-health cur-health
                 :room-idx room-idx
                 :rooms rooms}
                ["username = ?" username])
    (str "Saved!")))

(cas/defrpc load [username]
  (first (db/query db-spec
                   [(str "SELECT x, y, cur-health, "
                         "room-idx, rooms "
                         "FROM game_data WHERE username = ?" username)])))

(defn splash []
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (concat ["<ul>"]
                 (for [sel (db/query db-spec
                                     ["SELECT * FROM game_data"])]
                   (format "<li>%s</li>" sel))
                 ["</ul>"])})

(defroutes app-routes
  ;; (GET "/test/add/:input" [input]
  ;;      (record input :test)
  ;;      {:status 200
  ;;       :headers {"Content-Type" "text/html"}
  ;;       :body (str "<b>Added:</b><br/>"
  ;;                  input
  ;;                  "<br/><a href=\"/test\">Back</a>")})
  ;; (GET "/test" []
  ;;      (splash :test))
  (GET "/" []
       (splash))
  (route/not-found "Not found"))

(defn wrap-cors [handler]
  (fn [request]
    (let [response (handler request)]
      (some-> (if (= (:request-method request) :options)
                {:status 200}
                response)
              (assoc-in [:headers "Access-Control-Allow-Origin"] "http://localhost:8000")
              (assoc-in [:headers "Access-Control-Allow-Methods"] "GET,POST,OPTIONS")
              (assoc-in [:headers "Access-Control-Allow-Credentials"] "true")
              (assoc-in [:headers "Access-Control-Allow-Headers"]
                        "accept, content-type, x-castra-csrf, x-castra-tunnel, x-castra-validate-only")))))

(def app
  (-> app-routes
      (wrap-castra 'ascii-never-dies.handler)
      (wrap-cors)))

(defn -main []
  (let [port (Integer. (or (env :port) 5000))]
    (jetty/run-jetty app {:port port :join? false})))
