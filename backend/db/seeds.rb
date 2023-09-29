User.destroy_all
Cuisine.destroy_all
Recipe.destroy_all
Like.destroy_all
Comment.destroy_all

italian = Cuisine.create!(name: 'Italian', image_url: File.open(Rails.root.join('public', 'images', "italianfood.jpg")))
spanish = Cuisine.create!(name: 'Spanish', image_url: File.open(Rails.root.join('public', 'images', "spanishfood.jpg")))
indian = Cuisine.create!(name: 'Indian', image_url: File.open(Rails.root.join('public', 'images', "indianfood.jpg" )))
turkish = Cuisine.create!(name: 'Turkish', image_url: File.open(Rails.root.join('public', 'images', "turkishfood.jpg")))
chinese = Cuisine.create!(name: "Chinese", image_url: File.open(Rails.root.join('public', 'images', "chinesefood.jpg")))
japanese = Cuisine.create!(name: "Japanese", image_url: File.open(Rails.root.join('public', 'images', "japanesefood.jpg")))
soul_food = Cuisine.create!(name: "Soul Food", image_url: File.open(Rails.root.join('public', 'images', "soulfood.jpg")))
korean = Cuisine.create!(name: "Korean", image_url: File.open(Rails.root.join('public', 'images', "koreanfood.jpg")))

user1 = User.create!(username: 'John', password: 'password', first_name: "John", last_name: "Wick")
user2 = User.create!(username: 'Jane', password: 'password', first_name: "Jane", last_name: "Maine")

recipe1 = Recipe.create!(
  name: 'Pasta Carbonara',
  image: "https://thestayathomechef.com/wp-content/uploads/2020/03/Pasta-Carbonara-2-3-scaled.jpg",
  ingredients: 'Spaghetti, eggs, pancetta, parmesan cheese',
  instructions: 'Cook spaghetti, fry pancetta, mix eggs and cheese, combine all',
  cuisine: italian,
  user: user1
)

recipe2 = Recipe.create!(
  name: 'Paella',
  image: "https://images.ctfassets.net/3s5io6mnxfqz/34NyUGqALQMx49gcHBWzIa/4678333ae7f54314afbd6c3f3b5e8e69/image1.jpg",
  ingredients: 'Rice, saffron, chicken, seafood, vegetables',
  instructions: 'Sauté chicken, add rice and broth, add seafood and veggies',
  cuisine: spanish,
  user: user2
)

Like.create!(user: user1, recipe: recipe1)
Like.create!(user: user2, recipe: recipe2)
Like.create!(user: user1, recipe: recipe2)

Comment.create!(user: user1, recipe: recipe1, content: 'This is delicious!')
Comment.create!(user: user2, recipe: recipe1, content: 'I will try it this weekend!')
Comment.create!(user: user1, recipe: recipe2, content: 'Great dish!')
Comment.create!(user: user2, recipe: recipe2, content: 'Love it!')
