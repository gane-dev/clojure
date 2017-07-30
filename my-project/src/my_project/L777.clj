(ns recipe1.L777
  (:require [clojure.set :as cset]))



(defn factorial-steps [n]
  (let [numbers (range 1 (+ n 1))]
    (reduce * numbers)))

(factorial-steps 5)

(range 1 6)

(def chessboard-labels
  (for [alpha "abcdefgh"
        num (range 1 9)]
    (str alpha num)))

chessboard-labels

(defn prime? [x]
  (let [divisors (range 2 (inc (int (Math/sqrt x))))
        remainders (map (fn [d] (rem x d)) divisors)]
    (not (some zero? remainders))))

(defn primes-less-than [n]
  (for [x (range 2 (inc n))
        :when (prime? x)]
    x))

(primes-less-than 100)
