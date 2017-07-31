(defmacro my-very-first-macro []
  (list println "FIRST"))

(my-very-first-macro)


(defmacro x3 [ arg ]
  (list * 3 arg ))

(x3 2)
