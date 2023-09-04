class Api::V1::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def login 
    @user = User.find_by(username: params[:username])
    if @user&.authenticate(params[:password])
      session[:user_id] = @user.id 
      render json: {user: @user}, status: :ok 
    else
      render json: {error: 'Invalid username or password'}, status: :unauthorized
    end
  end

  
end