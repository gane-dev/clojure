(ns reframe-sample.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [reframe-sample.events]
            [reframe-sample.subs]
            [reframe-sample.views :as views]
            [reframe-sample.config :as config]))


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (re-frame/dispatch-sync [:initialize-db])
  (dev-setup)
  (mount-root))
