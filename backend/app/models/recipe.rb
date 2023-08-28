class Recipe < ApplicationRecord
    belongs_to :user
    belongs_to :cuisine
    has_many :comments
    validates :name, :ingredients, :instructions, :user_id, :cuisine_id, presence: true
  end
  