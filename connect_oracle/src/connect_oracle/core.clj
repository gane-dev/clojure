(ns connect-oracle.core
  (:gen-class)
  (:require [connect-oracle.db :refer [db]]
            
            [connect-oracle.db.datasource :as datasource]
            
            [clojure.pprint :as pprint]
            [clojure.string :as string]
            [clojure.java.jdbc]))
            



(def pp pprint/pprint)

(defn ppl [x]
  (pp x) (println))

(defn ppr
  [x]
  (print (string/replace (with-out-str (pp x)) #"\n$" ""))
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
           (map #(with-out-str (pp %)) (rest sv)))
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

(defn select-oracle
  []
 (ex (datasource/all-sources db))
)
(defn -main

  []
  (select-oracle)

  (println "\n\n THE END\n"))
