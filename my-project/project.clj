(defproject my-project "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/java.jdbc "0.7.0"]
                 [korma "0.4.0"]]
  :resource-paths ["resources/mysql-connector-java-5.1.43.jar"]
  :main ^:skip-aot my-project.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
