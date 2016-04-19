(ns ascii-never-dies.handler
  (:require [compojure.core :refer :all]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [ring.adapter.jetty :as jetty]
            [environ.core :refer [env]]
            [clojure.java.jdbc :as db]
            [castra.core :as cas]
            [castra.middleware :refer [wrap-castra]]
            [clojure.data.json :as json])
  (:import org.postgresql.util.PGobject))

;; ---------------------------------------------------------------------------
;; Database specification

(def db-spec (str (env :database-url)
                  "?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory"))

;; ---------------------------------------------------------------------------
;; Helper functions

; Auto converts vectors into SQL arrays when needed
#_(extend-protocol db/ISQLParameter
  clojure.lang.IPersistentVector
  (set-parameter [v ^java.sql.PreparedStatement stmt ^long i]
    (let [conn (.getConnection stmt)
          meta (.getParameterMetaData stmt)
          type-name (.getParameterTypeName meta i)]
      (if-let [elem-type (when (= (first type-name) \_) (apply str (rest type-name)))]
        (.setObject stmt i (.createArrayOf conn elem-type (to-array v)))
        (.setObject stmt i v)))))
#_(extend-protocol db/IResultSetReadColumn
  java.sql.Array
  (result-set-read-column [val _ _]
    (into [] (.getArray val))))

; Auto converts between Clojure maps and JSON objects
(extend-protocol db/ISQLValue
  clojure.lang.IPersistentMap
  (sql-value [value]
    (doto (PGobject.)
      (.setType "json")
      (.setValue (json/write-str value)))))
(extend-protocol db/IResultSetReadColumn
  PGobject
  (result-set-read-column [pgobj metadata idx]
    (let [type  (.getType pgobj)
          value (.getValue pgobj)]
      (case type
        "json" (json/read-str value :key-fn keyword)
        :else value))))

(defn record
  "Records a new username with default values."
  [username]
  (db/insert! db-spec :game_data
              {:username username :password ""
               :x 0 :y 0 :cur_health -1
               :room_idx {:x 0 :y 0} :rooms {}}))

(defn vec->map
  "Converts a vector to an IDed map."
  [v]
  (into {} (for [i (range (count v))
                 :let [el (nth v i)]]
             [(inc i) el])))

(defn map->vec
  "Converts an IDed map to a vector."
  [m]
  (vals m))

;; ---------------------------------------------------------------------------
;; RPC functions

(cas/defrpc get-user
  "Returns all information about a given user."
  [username]
  (first (db/query db-spec
                   ["SELECT * FROM game_data WHERE username = ?" username])))

(cas/defrpc add-user
  "Adds a user to the database with default values."
  [username]
  (record username)
  (str "Success! Added: " (get-user username)))

(cas/defrpc save
  "Records the given state of the user into the database."
  [username state]
  (let [{x :x y :y cur-health :cur-health} (:player state)
        room-idx (:room-idx state)
        rooms (:rooms state)]
    (db/update! db-spec :game_data
                {:x x :y y :cur_health cur-health
                 :room_idx room-idx
                 :rooms rooms}
                ["username = ?" username])
    (str "Saved!")))

(cas/defrpc load
  "Returns the currently stored state for the given user."
  [username]
  (first (db/query db-spec
                   [(str "SELECT x, y, cur_health, "
                         "room_idx, rooms "
                         "FROM game_data WHERE username = ?" username)])))

;; ---------------------------------------------------------------------------
;; Server webpage

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
