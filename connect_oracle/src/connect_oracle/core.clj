(ns connect-oracle.core
  (:gen-class)
  (:require [connect-oracle.db :refer [db]]
            
            [connect-oracle.db.datasource :as datasource]
            
            [clojure.pprint :as pprint]
            [clojure.string :as string]
            [clojure.java.jdbc :as j]
            [jdbc.core :as jdbc]
         ;   [hikari-cp.core :as hikari]
;;            [com.mchange.v2.c3p0.ComboPooledDataSource]
            [jdbc.pool.c3p0 :as pool]
            )
;;  (import 'com.mchange.v2.c3p0.ComboPooledDataSource)
)
;; (def ds (hikari/make-datasource
;;          {:connection-timeout 30000
;;           :idle-timeout 600000
;;           :max-lifetime 1800000
;;           :minimum-idle 10
;;           :maximum-pool-size  10
;;           :driverType "thin"
;;           :adapter "oracle"
;;         ;;  :jdbc-url  "thin:@//purststscan.avendra.com:1521/purstest.avendra.com"
;;           :username "GDEVARAJ"
;;           :password "password5Ganesh"
;;           :database-name "purstest.avendra.com"
;;           :server-name "purststscan.avendra.com"
;;           :port-number 1521}))            

;; (def ds (doto (ComboPooledDataSource.)
;;           (.setJdbcUrl (str "jdbc:"
;;                             (:subprotocol db)
;;                             (:subname db)))
;;           (.setUser (:user db nil))
;;           (.setPassword (:password db nil))

;;           ;; Pool Size Management
;;           (.setMinPoolSize 3)
;;           (.setMaxPoolSize 15)

;;           ;; Connection eviction
;;           (.setMaxConnectionAge  3600) ; 1 hour
;;           (.setMaxIdleTime 1800)       ; 1/2 hour
;;           (.setMaxIdleTimeExcessConnections 120)

;;           ;; Connection testing
;;           (.setTestConnectionOnCheckin false)
;;           (.setTestConnectionOnCheckout false)
;;           (.setIdleConnectionTestPeriod 600)))

(def ds (pool/make-datasource-spec db))
(def pp1 pprint/pprint)

(defn ppl [x]
  (pp1 x) (println))

(defn ppr
  [x]
  (print (string/replace (with-out-str (pp1 x)) #"\n$" ""))
  (println " ;;=>"))

(defn ppsv
  "Pretty print an sqlvec"
  [sv]
  (println
    (string/join ""
      ["[\""
       (-> (first sv)
         (string/replace #"\"" "\\\\\"")
         (string/replace #"\n" "\n  "))
       "\""
       (when (seq (rest sv)) "\n,")
       (string/replace
         (string/join ","
           (map #(with-out-str (pp1 %)) (rest sv)))
         #"\n$"
         "")
       "]\n"])))

(defmacro ex
  "Example macro: Pretty print code, 
   eval, then pretty print result"
  [& code]
  `(do
     (ppr (quote ~@code))
     (ppl ~@code)))

(defmacro exsv
  "Example macro for sqlvec: Pretty print code, 
   eval, then pretty print sqlvec"
  [& code]
  `(do
     (ppr (quote ~@code))
     (ppsv ~@code)))

;;HUGSQL
(defn select-oracle
  []
 (ex (datasource/all-sources db))
)
;;CLOJURE JDBC
(defn jdbc-function
  []
  (with-open [conn (jdbc/connection db)]
  (jdbc/execute conn "BEGIN 
  GDEVARAJ.TEST_CLOJURE_EXECUTION;
END;"))
)

;;connection pooling
(defn jdbc-pool
  []
  (with-open [conn (jdbc/connection ds)]
  (jdbc/execute conn "BEGIN 
  GDEVARAJ.TEST_CLOJURE_EXECUTION;
END;"))
)
(defn exe-sp
  []
  (j/execute! db  ["TEST_CLOJURE_EXECUTION" ])
  (defn -main

    []
    (take 1 (select-oracle)) 

    (println "\n\n THE END\n")))
