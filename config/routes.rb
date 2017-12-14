Rails.application.routes.draw do

    root 'top#new'
    resources :blogs, only: [:index, :create, :edit, :show, :update, :destroy] do
   end
end
