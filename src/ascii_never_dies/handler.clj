(ns ascii-never-dies.handler
  (:require [compojure.core :refer :all]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [ring.adapter.jetty :as jetty]
            [environ.core :refer [env]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [clojure.java.jdbc :as db]
            [castra.core :as cas]))

(cas/defrpc test
  "Test success!")

(cas/defrpc get-record
  [id]
  (first (db/query "SELECT * FROM test WHERE id = ?" id)))

(cas/defrpc update-record
  [id {:keys [content]}]
  (db/insert! (env :database-url "postgres://localhost:5432/and-db")
              :test {:content content})
  (get-record id))

(defn splash []
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (concat ["<ul>"]
                 (for [sel (db/query (env :database-url)
                                     ["SELECT * FROM test"])]
                   (format "<li>%s</li>" sel))
                 ["</ul>"])})

(defn record [input]
  (db/insert! (env :database-url "postgres://localhost:5432/and-db")
              :test {:content input}))

(defroutes app-routes
  (GET "/add" {{input :input} :params}
       (record input)
       {:status 200
        :headers {"Content-Type" "text/html"}
        :body (str "<b>Added:</b><br/>"
                   input
                   "<br/><a href=\"/\">Back</a>")})
  (GET "/" []
       (splash))
  (route/not-found "Not found"))

(def app (-> (fn [_] {:status 404 :body "not found"}) (wrap-castra app-routes)))

(defn -main []
  (let [port (Integer. (or (env :port) 5000))]
    (jetty/run-jetty app  {:port port :join? false})))
