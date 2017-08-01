  (require '[clojure.core.async :as async])

(filter
  #(= 0 (rem % 3))
  (range 1 10))


(transduce
  (filter even?) conj (range 5))

(transduce
  (map inc)
  conj
  (range 5))


(def c (async/chan 1 (filter odd?)))

(async/onto-chan c (range))

(async/<!! c)



(sort-by
 :price
 >
 [{:price  10 :product :apple}
  {:price 30 :product :tomato}
  {:price 5 :product :peanuts}])


(->>
  (slurp "project.clj")
  clojure.string/split-lines
  (sort #(compare (count %1) (count %2)))
  (clojure.string/join "\n")
  (spit "target/buffer.out"))
