Rails.application.routes.draw do
  root to: 'site#index'
  get '/site/index'
  namespace :api do
    namespace :v1 do
      resources :comments, only: [:index, :create, :destroy, :update]
    end
  end
end
