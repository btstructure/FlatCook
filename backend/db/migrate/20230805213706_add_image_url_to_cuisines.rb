class AddImageUrlToCuisines < ActiveRecord::Migration[7.0]
  def change
    add_column :cuisines, :image_url, :string
  end
end
