(ns ascii-never-dies.handler
  (:require [compojure.core :refer :all]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [ring.adapter.jetty :as jetty]
            [environ.core :refer [env]]
            [clojure.java.jdbc :as db]
            [castra.core :as cas]
            [castra.middleware :refer [wrap-castra]]
            [ring.middleware.cors :refer [wrap-cors]]))

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

(def app
  (-> app-routes
      (wrap-castra 'ascii-never-dies.handler)
      (wrap-cors :access-control-allow-origin [#".*"]
                 :access-control-allow-methods [:get :put :post :delete])))

(defn -main []
  (let [port (Integer. (or (env :port) 5000))]
    (jetty/run-jetty app {:port port :join? false})))
