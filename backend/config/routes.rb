Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      post 'signup', to: 'auth#signup'
      post 'login', to: 'sessions#login'
      delete 'logout', to: 'sessions#logout'
      
      get 'cuisines', to: 'cuisines#index'
      get 'cuisines/:id', to: 'cuisines#show'

      get 'recipes/:id', to: 'recipes#show'

      post 'recipes/:id/comments', to: 'comments#create'

    end
  end
end
