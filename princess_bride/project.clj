(defproject princess_bride "0.1.0"
  :description "HugSQl"
  :url ""
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [com.layerware/hugsql "0.4.6"]
                 [com.h2database/h2 "1.4.190"]]
  :main ^:skip-aot princess-bride.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
