(defproject ascii-never-dies "0.0.1"
  :description "Web-based rogue-lite written in Clojure"
  :url "https://github.com/seniordesign2/game-client"
  :min-lein-version "2.0.0"
  :dependencies [
                 [org.clojure/clojure "1.7.0"]
                 [compojure "1.4.0"]
                 [ring/ring-defaults "0.1.5"]
                 [ring/ring-jetty-adapter "1.4.0"]
                 [environ "1.0.0"]
                 [org.clojure/java.jdbc "0.3.5"]
                 [org.postgresql/postgresql "9.4-1201-jdbc4"]
                 ]
  :plugins [[lein-ring "0.9.7"]
            [environ/environ.lein "0.3.1"]]
  :ring {:handler ascii-never-dies.handler/app}
  :profiles {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring/ring-mock "0.3.0"]]}
             :production {:env {:production true}}}
  :uberjar-name "ascii-never-dies-standalone.jar")
