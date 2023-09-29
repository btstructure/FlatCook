class Cuisine < ApplicationRecord
    has_many :recipes
    has_one_attached :image

end
