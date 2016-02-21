(defproject ascii-never-dies
  :url "https://github.com/seniordesign2/game-client"
  :min-lein-version "2.6.1"
  :dependencies '[
                  [org.clojure/clojure "1.7.0"]
                  [org.clojure/clojurescript "1.7.170"]
                  [org.clojure/java.jdbc "0.4.2"]
                  [mysql/mysql-connector-java "5.1.38"]
                  ]
  :source-paths #{"src/cljs"}
  :resource-paths #{"html"})
