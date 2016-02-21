(ns ascii-never-dies.login)

;; Define fn to attach to form submission event
(defn validate-form []
  ;; Get email and pword element from IDs in HTML form
  (let [email (.getElementById js/document "email")
        password (.getElementById js/document "password")]
    (if (and (> (count (.-value email)) 0)
             (> (count (.-value password)) 0))
      true
      (do (js/alert "Complete the form, asswipe!")
          false))))

;; Define fn to attach validate-form to onsubmit event of form
(defn init []
  ;; Verify js/document exists and it has a getElementById property
  (if (and js/document
          (.-getElementById js/document))
    ;; Get loginForm and set onsubmit prop to validate-form
    (let [login-form (.getElementById js/document "loginForm")]
      (set! (.-onsubmit login-form) validate-form))))

;; Init HTML page
(set! (.-onload js/window) init)
