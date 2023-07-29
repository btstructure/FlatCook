class Api::V1::SessionsController < ApplicationController

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
        if session[:user_id]
          session.delete(:user_id)
          head :no_content
        else
          render json: { error: 'Not logged in' }, status: :unauthorized
        end
      end

  end
  