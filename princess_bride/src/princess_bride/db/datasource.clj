(ns princess-bride.db.datasource
  (:require [hugsql.core :as hugsql]))

(hugsql/def-db-fns "princess_bride/db/sql/datasource.sql")
