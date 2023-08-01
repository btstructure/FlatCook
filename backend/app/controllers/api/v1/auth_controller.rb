class Api::V1::AuthController < ApplicationController
    skip_before_action :verify_authenticity_token
  
    def signup
      user = User.new(user_params)
  
      if user.save
        session[:user_id] = user.id
        render json: { user: user }, status: :created
      else
        render json: { error: user.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def login
      user = User.find_by(username: params[:username])
  
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: { user: user }, status: :ok
      else
        render json: { error: 'Invalid username or password' }, status: :unauthorized
      end
    end
  
    def logout
      session.delete(:user_id)
      render json: { message: 'Logged out successfully' }, status: :ok
    end
  
    private
  
    def user_params
      params.permit(:username, :password, :password_confirmation)
    end
  end
  