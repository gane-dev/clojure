(ns connect-oracle.db
  (:require [hugsql.core :as hugsql]
            )
  (:require [clojure.java.jdbc :as j]
           ))
(def db  
  {:classname "oracle.jdbc.driver.OracleDriver"
   :subprotocol "oracle"
   :subname "thin:@//purststscan.avendra.com:1521/purstest.avendra.com"
   :user "GDEVARAJ"
   :password "password5Ganesh"
   })
