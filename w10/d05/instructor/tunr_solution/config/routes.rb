Rails.application.routes.draw do
 root to: "users#new"
 resources :users, only: [:new, :create, :show, :destroy]
 resources :songs
 resources :playlists do 
  member do 
    put 'add_song'
    put 'remove_song'
  end
 end
 resources :artists

 get 'sessions/new' => 'sessions#new'
 post 'sessions' => 'sessions#create'
 delete 'sessions' => 'sessions#destroy'
end
