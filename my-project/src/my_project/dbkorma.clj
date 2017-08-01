(ns my-project.dbkorma
  (:require [clojure.string :as str])
  (:require [korma.db])
  (:require [clojure.java.jdbc :as j]
           ))


(def mysql-db {:classname "com.mysql.jdbc.Driver"
                :dbtype "mysql"
               :dbname "social_network"
               :user "gdevaraj"
               :password "bans2008"})

(defdb korma-db mysql-db)
