(require '[clojure.core.match :refer [match]])
(let [[x y z] [1 2 3]]
  [x y z])

(let
  [{:keys [x y z] :or {x 0 y 0 z 0} :as all} {:x 1 :a 2 :b 3}]
  [x y z all])


(let [x false y true  z true]
  (match [x y z]
         [false false false] 1
         :else 5))
