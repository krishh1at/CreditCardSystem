Rails.application.routes.draw do
  root "home#index"
  get 'apply', to: "applicants#new"
  get "login", to: redirect("/auth/google_oauth2"), as: "login"
  get "auth/:provider/callback", to: "sessions#create"
  get "auth/failure", to: redirect("/")
  delete "logout", to: "sessions#destroy", as: "logout"

  namespace :api do
    namespace :v1 do
      resources :applicants
    end
  end

  resources :applicants, only: [:new, :index]
end
