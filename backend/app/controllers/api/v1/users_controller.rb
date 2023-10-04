class Api::V1::UsersController < ApplicationController
    before_action :require_login, only: [:show, :update_password]

    def create
      user = User.create(user_params)
      if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
      else render json: { errors: user.errors.full_messages }, status: :unprocessable_entity 
      end
    end

    def show
        @current_user = User.find(session[:user_id])
        render json: @current_user, status: :ok
    end

    def update_password 
        user = User.find_by(session[:user_id])
        if user && user.update(user_password_params)
            render json: {message: "Password successfully updated"}, status: :ok
        else
            render json: {errors: user&.errors&.full_messages || ["User not found"]}, status: :unprocessable_entity
        end
    end

    private 

    def user_params 
        params.permit(:username, :password, :password_confirmation)
    end

    def user_password_params 
        params.require(:user).permit(:password, :password_confirmation)
    end

    def require_login
        unless session[:user_id]
          render json: { error: 'You must be logged in to access this resource' }, status: :unauthorized
        end
    end
   
end
