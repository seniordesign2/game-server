(ns ascii-never-dies.handler
  (:require [compojure.core :refer :all]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [ring.adapter.jetty :as jetty]
            [environ.core :refer [env]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [clojure.java.jdbc :as db]))

(defn splash []
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (concat ["<ul>"]
                 (for [sel (db/query (env :database-url)
                                     ["select * from test"])]
                   (format "<li>%s</li>" sel))
                 ["</ul>"])})

(defn record [input]
  (db/insert! (env :database-url "postgres://localhost:5432/and-db")
              :test {:content input}))

(defroutes app-routes
  (GET "/add" {{input :input} :params}
       (record input)
       {:status 200
        :headers {"Content-Type" "text/plain"}
        :body (concat
               (str "Added " input)
               "<a href=\"/\">Back</a>")})
  (GET "/" []
       (splash))
  (route/not-found "Not found"))

(def app
  (wrap-defaults app-routes site-defaults))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))]
    (jetty/run-jetty (site #'app) {:port port :join? false})))
