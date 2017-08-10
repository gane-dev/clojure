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
(defn upload
  [headshot c]
  (go (Thread/sleep (rand 100))
      (>! c headshot)))

(defn testupload
  []
  (let [c1 (chan)
        c2 (chan)
        c3 (chan)]
    (upload "serious.jgp" c1)
    (upload "fun.jgp" c2)
    (upload "sassy.jgp" c3)
    (let [[headshot channel] (alts!! [c1 c2 c3])]
      (println "sending headshot" headshot))))

(defn append-to-file
  [filename s]
  (spit filename s :append true))

(defn format-quote
  [quote]
  (str "=== BEGIN QUOTE ===\n" quote "===END QUOTE"))

(defn random-quote
  []
  (format-quote (slurp "http://www.braveclojure.com/random-quote")))

(defn snag-quotes
  [filename num-quotes]
  (let [c (chan)]
    (go (while true (append-to-file filename (<! c))))
    (dotimes [n num-quotes] (go (>! c (random-quote))))))

(defn upper-caser
  [in]
  (let [out (chan)]
    (go (while true (>! out (clojure.string/upper-case (<! in)))))
    out))


(defn reverser
  [in]
  (let [out (chan)]
    (go (while true (>! out (clojure.string/reverse (<! in)))))
    out))

(defn printer
  [in]
  (go (while true (println (<! in)))))

(def in-chan (chan))

(def upper-caser-out (upper-caser in-chan))
(def reverser-out (reverser upper-caser-out))
;;(printer reverser-out)

(defmulti full-moon-behavior (fn [were-creature ](:were-type were-creature)))

(defmethod full-moon-behavior :wolf
  [were-creature]
  (str (:name were-creature) " will howl and murder"))
(defmethod full-moon-behavior :simmons
  [were-creature]
  (str (:name were-creature) " will encourage people and sweat to the oldies"))



(defmulti types (fn [x y] [(class x) (class y)]))

(defmethod types [java.lang.String java.lang.String]
  [x y]
  "Two strings")
(defmethod types [java.lang.Float java.lang.Float]
  [x y]
  "Two integers")



