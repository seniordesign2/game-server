(defproject ascii-never-dies "0.0.1"
  :description "Web-based rogue-lite written in Clojure"
  :url "https://github.com/seniordesign2/game-client"
  :min-lein-version "2.0.0"
  :dependencies [
                 [org.clojure/clojure "1.7.0"]
                 [compojure "1.4.0"]
                 [ring/ring-defaults "0.1.5"]
                 ]
  :plugins [[lein-ring "0.9.7"]]
  :ring {:handler ascii-never-dies.handler/app}
  :profiles {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring/ring-mock "0.3.0"]]}})
