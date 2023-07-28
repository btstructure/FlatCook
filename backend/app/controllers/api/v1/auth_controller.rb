class Api::V1::AuthController < ApplicationController
    skip_before_action :verify_authenticity_token

    def login
        user = User.find_by(username: params[:username])

        if user&.authenticate(params[:password])
            render json: {user: user}, status: ok
        else
            render json: {error: 'Invalid email or password'}, status: :unauthorized
        end
    end

    def signup 
        user = User.new(user_params)

        if user.save 
            render json: {user: user}, status: :created 
        else 
            render json: {error: user.errors.full_messages}, status: :unprocessable_entity
        end
    end


    private

    def user_params 
        params.permit(:username, :password, :password_confirmation)
    end
end
