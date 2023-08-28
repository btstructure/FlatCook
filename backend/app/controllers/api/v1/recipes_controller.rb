class Api::V1::RecipesController < ApplicationController
    def show
        @recipe = Recipe.find(params[:id])
        render json: @recipe.to_json(include: {comments: {include: :user}})
    end
end
