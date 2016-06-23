# need to fill this out

class SessionsController < ApplicationController
  def create
    user= User.find_by(username: params[:username])
    if user && user.authenticat(params[:password])
      session[:current_user_id] = user.id
      redirect_to users_path(user.id)
    else
      redirect_to root_path
  end

  def destroy
    session[:current_user_id]=nil
    redirect_to root_path
  end
end
