class Api::V1::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index 
        current_user = User.find_by_id(session[:user_id])
    end
end
