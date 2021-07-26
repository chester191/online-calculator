(ns khepri-application.views
  (:require
   [re-frame.core :as re-frame]
   [khepri-application.styles :as styles]
   [khepri-application.subs :as subs]
   ))

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [:div
     [:h1
      {:class (styles/level1)}
      "Hello from " @name]
     ]))
