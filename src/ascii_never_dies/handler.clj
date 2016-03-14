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

(defn record [input]
  (db/insert! db-spec
              :test {:content input}))

(defn table-size []
  (:count (first (db/query db-spec
                           ["SELECT COUNT(*) FROM test"]))))

(cas/defrpc get-record [id]
  (first (db/query db-spec
                   ["SELECT * FROM test WHERE id = ?" (Integer. id)])))

(cas/defrpc update-record [content]
  (do
    (record content)
    (get-record (table-size))))

(defn splash []
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (concat ["<ul>"]
                 (for [sel (db/query db-spec
                                     ["SELECT * FROM test"])]
                   (format "<li>%s</li>" sel))
                 ["</ul>"])})

(defroutes app-routes
  (GET "/add/:input" [input]
       (record input)
       {:status 200
        :headers {"Content-Type" "text/html"}
        :body (str "<b>Added:</b><br/>"
                   input
                   "<br/><a href=\"/\">Back</a>")})
  (GET "/" []
       (splash))
  (route/not-found "Not found"))

(defn allow-cross-origin [handler]
  (fn [request]
    (let [response (handler request)]
      (assoc-in response [:headers "Access-Control-Allow-Origin"] "localhost:8000"))))

(def app
  (-> app-routes
      (wrap-castra 'ascii-never-dies)
      (allow-cross-origin)))

(defn -main []
  (let [port (Integer. (or (env :port) 5000))]
    (jetty/run-jetty app {:port port :join? false})))
