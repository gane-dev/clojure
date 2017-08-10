(defproject com.avendra.purs "0.1.0"
  :description "Wrapper to extract date from string"


  :dependencies [[org.clojure/clojure "1.8.0"]
                 [clj-time "0.14.0"]]
  :main com.avendra.purs
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
