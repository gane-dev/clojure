(ns princess-bride.db.characters
  (:require [hugsql.core :as hugsql]))

(hugsql/def-db-fns "princess_bride/db/sql/characters.sql")

(hugsql/def-sqlvec-fns "princess_bride/db/sql/characters.sql")
