Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      post 'signup', to: 'auth#signup'
      post 'login', to: 'auth#login'
      delete 'logout', to: 'auth#logout'
      
      get 'cuisines', to: 'cuisines#index'
      get 'cuisines/:id', to: 'cuisines#show'

      get 'recipes/:id', to: 'recipes#show'
    end
  end
end
