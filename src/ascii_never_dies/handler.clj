(ns ascii-never-dies.handler
  (:require [compojure.core :refer :all]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [ring.adapter.jetty :as jetty]
            [environ.core :refer [env]]
            [clojure.java.jdbc :as db]
            [castra.core :as cas]
            [castra.middleware :refer [wrap-castra]]))

(def db-spec (str (env :database-url) "?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory"))

(defn record [input table]
  (db/insert! db-spec
              table {:content input}))

(defn table-size [table]
  (:count (first (db/query db-spec
                           ["SELECT COUNT(*) FROM ?" (name table)]))))

(cas/defrpc get-record [id table]
  (first (db/query db-spec
                   ["SELECT * FROM ? WHERE id = ?" (name table) (Integer. id)])))

(cas/defrpc update-record [content table]
  (do
    (record content table)
    (get-record (table-size table) table)))

(defn splash [table]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (concat ["<ul>"]
                 (for [sel (db/query db-spec
                                     ["SELECT * FROM ?" (name table)])]
                   (format "<li>%s</li>" sel))
                 ["</ul>"])})

(defroutes app-routes
  (GET "/test/add/:input" [input]
       (record input :test)
       {:status 200
        :headers {"Content-Type" "text/html"}
        :body (str "<b>Added:</b><br/>"
                   input
                   "<br/><a href=\"/\">Back</a>")})
  (GET "/test" []
       (splash :test))
  (GET "/" []
       (splash :game_data))
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
