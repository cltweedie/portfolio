Rails.application.routes.draw do
  root 'home#index'

  get 'home', to: 'home#index'
  get 'about', to: 'home#index'
  get 'portfolio', to: 'home#index'
  get 'blog', to: 'home#index'
  get 'cv', to: 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
