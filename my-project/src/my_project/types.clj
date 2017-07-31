(ns my-project.types
(:require [clojure.math.numeric-tower :as math]))

(deftype Point [x y])

(def pos1 (Point. 1 2))

(.x pos1)


(defrecord Point1 [x y])

(defprotocol IPoint
  (move [self delta])
  (distance [self])
  )

(extend-protocol IPoint
  Point1
  (move [self delta]
        (->Point1
          (+ (.-x self) (delta 0))
          (+ (.-y self) (delta 1))))
              (distance [self]
                (math/sqrt
                 (+
                  (* (.-x self) (.-x self))
                  (* (.-y self) (.-y self)))
                 )))

(def pos2 (Point1. 1 2))

(distance pos2)
