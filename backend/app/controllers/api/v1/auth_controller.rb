class Api::V1::AuthController < ApplicationController
    skip_before_action :verify_authenticity_token
  
    def signup
      user = User.new(user_params)
  
      if user.save
        render json: { user: user }, status: :created
      else
        render json: { error: user.errors.full_messages }, status: :unprocessable_entity
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
  