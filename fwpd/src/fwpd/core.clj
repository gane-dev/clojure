(ns fwpd.core)
(def filename "suspects.csv")
(def vamp-keys [:name :glitter-index])
(defn str->int
  [str]
  (Integer. str))

(def conversions {:name identity
                  :glitter-index str->int})

(defn convert
  [vamp-key value]
  (get conversions vamp-key) value)
