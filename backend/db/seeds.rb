User.destroy_all
Cuisine.destroy_all
Recipe.destroy_all
Like.destroy_all
Comment.destroy_all

italian = Cuisine.create!(name: 'Italian', image_url: "https://www.tastingtable.com/img/gallery/20-italian-dishes-you-need-to-try-at-least-once/l-intro-1643403830.jpg")
spanish = Cuisine.create!(name: 'Spanish', image_url: "https://www.expatica.com/app/uploads/sites/2/2014/05/spanish-cuisine.jpg")
indian = Cuisine.create!(name: 'Indian', image_url: "https://hips.hearstapps.com/hmg-prod/images/chicken-tikka-masala1-1663341991.jpg?crop=0.891xw:0.656xh;0.0433xw,0.321xh&resize=1200:*")

user1 = User.create!(username: 'John', password: 'password')
user2 = User.create!(username: 'Jane', password: 'password')

recipe1 = Recipe.create!(
  name: 'Pasta Carbonara',
  ingredients: 'Spaghetti, eggs, pancetta, parmesan cheese',
  instructions: 'Cook spaghetti, fry pancetta, mix eggs and cheese, combine all',
  cuisine: italian,
  user: user1
)

recipe2 = Recipe.create!(
  name: 'Paella',
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
