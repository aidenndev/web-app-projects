Rails.application.routes.draw do

  resources :transform_definitions
  resources :outputs
  resources :inputs
	resources :transformations
	root to: 'welcome#home'
	#match '/home', to: 'pages#home', via: 'get'
  match '/home', to: 'welcome#home', via: 'get'

  #User Details
  match '/users', to: 'users#index', via: 'get'
  match '/users/:id', to: 'users#show', via: 'get'
  match '/users/:id', to: 'users#destroy', :via => :delete, :as => :admin_destroy_user
  devise_for :users, :path_prefix => 'd'
  resources :users, :only =>[:show]

  #Other pages
  match '/start', to: 'pages#start', via: 'get'
  match '/instruction', to: 'pages#instruction', via: 'get'
  match '/create', to: 'pages#create', via: 'get'
  match 'transformation/create', to: 'transformations#create', via: 'post'

  post 'pages/upload', to: 'pages#upload'
  get 'pages/download', to: 'pages#download'
  #match 'pages/create', to: 'pages#create', via: 'get'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html





end
