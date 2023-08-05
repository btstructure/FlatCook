class Api::V1::CuisinesController < ApplicationController
  def index
    @cuisines = Cuisine.all
    render json: @cuisines
  end

  def show
    @cuisine = Cuisine.find(params[:id])
    @dishes = @cuisine.recipes 
    render json: { cuisine: @cuisine, dishes: @dishes }
  end
end
