(defproject ascii-never-dies "1.0.0"
  :description "Web-based rogue-lite written in Clojure"
  :url "https://github.com/seniordesign2/game-client"
  :min-lein-version "2.6.1"
  :dependencies [
                 [org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [compojure "1.4.0"]
                 [ring/ring-jetty-adapter "1.4.0"]
                 [environ "1.0.0"]
                 [org.clojure/java.jdbc "0.4.2"]
                 [org.postgresql/postgresql "9.4-1201-jdbc4"]
                ]
  :source-paths #{"src/cljs"}
  :resource-paths #{"html"})
