(ns my-project.db
  (:require [clojure.java.jdbc :as j]
           ))


(def mysql-db {:classname "com.mysql.jdbc.Driver"
                :dbtype "mysql"
               :dbname "social_network"
               :user "gdevaraj"
               :password "bans2008"})

(j/query mysql-db
  ["select * from customer"]
  {:row-fn :firstname})
