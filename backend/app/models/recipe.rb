class Recipe < ApplicationRecord
    belongs_to :user
    belongs_to :cuisine
    validates :name, :ingredients, :instructions, :user_id, :cuisine_id, presence: true
  end
  