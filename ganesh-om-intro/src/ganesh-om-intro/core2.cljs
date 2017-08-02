(ns ganesh-om-intro.core2
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)
(def app-state (atom {:count 0}))

(defui Counter
  Object
  (render [this]
          (let [{:keys [count]} (om/props this)]
            (dom/div nil
                     (dom/span nil (str "Count: " count))
                     (dom/button
                       #js {:onClick
                            (fn [e]
                              (println "Count: " count)
                              (swap! app-state update-in [:count] inc))}
                       "Click me!")))))

(def reconciler
  (om/reconciler {:state app-state}))

(om/add-root! reconciler
              Counter (gdom/getElement "app"))
