(ns princess-bride.db
  (:require [hugsql.core :as hugsql]
            )
  (:require [clojure.java.jdbc :as j]
           ))


;; (def db

;;   {:subprotocol "h2"
;;    :subname (str (System/getProperty "java.io.tmpdir")
;;                  "/princess_bride.h2")})

(def db {:classname "com.mysql.jdbc.Driver"
                :dbtype "mysql"
               :dbname "social_network"
               :user "gdevaraj"
               :password "bans2008"})
