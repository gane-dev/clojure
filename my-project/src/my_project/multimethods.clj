(defmulti volume :shape)

(defmethod volume :cube [shape]
  (* (:length shape)(:length shape)(:length shape)))

(volume {:shape :cube :length 10})

(defmethod volume :rectangular-parallelepiped [shape]
  (* (:length shape)(:width shape)(:height shape))
  )

(volume {:shape :rectangular-parallelepiped :length 2 :width 3 :height 4})
