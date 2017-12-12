Rails.application.routes.draw do

  
    resources :blogs, only: [:index, :create, :edit, :show, :update, :destroy] do
   end
end
