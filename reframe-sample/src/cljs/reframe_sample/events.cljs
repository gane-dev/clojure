(ns reframe-sample.events
  (:require [re-frame.core :as re-frame]
            [reframe-sample.db :as db]))

(re-frame/reg-event-db
 :initialize-db
 (fn  [_ _]
   db/default-db))
