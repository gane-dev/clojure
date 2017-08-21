(defproject connect_oracle "0.1.0"
  :description "HugSQl Oracle"
  :url ""
  :license {:name "Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [com.layerware/hugsql "0.4.6"]
                 ;;   [com.h2database/h2 "1.4.190"]
                 [org.clojure/java.jdbc "0.7.0"]
                 [funcool/clojure.jdbc "0.9.0"]]
  :resource-paths ["resources/ojdbc7.jar"]
  :main ^:skip-aot connect-oracle.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
