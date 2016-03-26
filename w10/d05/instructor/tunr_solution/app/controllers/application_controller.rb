class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  #TODO what is happening here? authenticate method
  def authenticate
    redirect_to new_user_path unless session[:current_user_id]
  end

  #TODO what is happening here? current_user method
  def current_user
    User.find(session[:current_user_id]) if session[:current_user_id]
  end

end
