(ns my-project.core
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))

(defn recursive-counter
  ([] (recursive-counter 0) )
  ([iteration] (println iteration) 
   (if (> iteration 3)
     (println "Goodbye") 
     (recursive-counter (inc iteration)))))
