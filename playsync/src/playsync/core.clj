(ns playsync.core
(:require [clojure.core.async
             :as a
             :refer [>! <! >!! <!! go chan buffer close! thread
                     alts! alts!! timeout]]))  

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))

(defn hot-dog-machine
  []
  (let [in (chan)
        out (chan)]
    (go (<! in)
        (>! out "hot dog"))
    [in out]))

(def test1
  (let [[in out] (hot-dog-machine)]
  (>!! in "pocket lint")
  (<!! out)))



(defn hot-dog-machine-v2
  [hot-dog-count]
  (let [in (chan)
        out (chan)]
    (go (loop [hc hot-dog-count]
          (if (> hc 0)
            (let [input (<! in)]
              (if (= 3 input)
                (do (>! out "hot dog")
                    (recur (dec hc)))
                (do (>! out "wilted lettuce")
                    (recur hc))))
            (do (close! in)
                (close! out)))))
    [in out]))


(def test2
  (let [[in out] (hot-dog-machine-v2 2)]
    (>!! in "pocket lint")
    (println (<!! out))
  

 ;; (>!! in 3)
 ;; (println (<!! out))


 ;; (>!! in 3)
 ;; (<!! out)
))
(defn chanfunction
  [a]
  (let [c1 (chan)
        c2 (chan)
        c3 (chan)]
    (go (>! c2 (clojure.string/upper-case (<! c1))))
   (go (>! c3 (clojure.string/reverse (<! c2)))) 
   (go (println (<! c3))) (>!! c1 a))
 
  )
