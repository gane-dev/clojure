(ns my-project.dbkorma
  (:require [clojure.string :as str])
  (:use [korma.db])
  (:use [korma.core])
  (:require [clojure.java.jdbc :as j]
           ))


(def db {:classname "com.mysql.jdbc.Driver"
               :host "localhost"
               :port 3306
               :db  "resources/db/korma.db"
               :dbname "social_network"
               :user "gdevaraj"
               :password "bans2008"})

(def db (mysql {:keys [ "localhost" 3306 "resources/db/korma.db"], :as [:user "root" :password "bans2008" :dbname "social_network"]}))

(defdb korma-db db)

(defentity customer
  (entity-fields :firstname))

(def base (-> (select* customer)
              (fields :firstname)))


(select base)
