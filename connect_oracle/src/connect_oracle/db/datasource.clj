(ns connect-oracle.db.datasource
  (:require [hugsql.core :as hugsql]))

(hugsql/def-db-fns "connect_oracle/db/sql/datasource.sql")
