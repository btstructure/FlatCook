import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Layout from "./Layout";
import { UserContext } from "./UseContext";

export default function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const [newComment, setNewComment] = useState("");
  const { id } = useParams();
  const backendBaseUrl = "http://localhost:3001";
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetch(`${backendBaseUrl}/api/v1/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data);
        console.log(data)
        console.log(user)
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    const newCommentData = {
      user_id: user.id,
      content: newComment,
      username: user.username
    };

    fetch(`${backendBaseUrl}/api/v1/recipes/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCommentData),
    })
      .then((response) => response.json())
      .then((data) => {
        setRecipe((prevRecipe) => ({
          ...prevRecipe,
          comments: [...prevRecipe.comments, data.comment],
        }));
        setNewComment("");
        console.log(data);
      })
      .catch((error) => console.error("Error creating comment: ", error));
  };

  return (
    <Layout>
      <div className="mt-10 max-w-6xl mx-auto">
        <div className="relative bg-white rounded-lg overflow-hidden shadow-md">
          <div className="relative h-80 overflow-hidden rounded-t-lg">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-40 rounded-t-lg"></div>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">{recipe.name}</h2>
            <div className="mb-4">
              <h3 className="text-xl font-medium mb-2">Ingredients:</h3>
              <ul className="list-disc list-inside pl-6">
                {recipe.ingredients.split(",").map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Instructions:</h3>
              <ul className="list-disc list-inside pl-6">
                {recipe.instructions.split(",").map((instructions, index) => (
                  <li key={index}>{instructions}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 mb-8  p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-2">Comments:</h3>
          <ul className="space-y-4">
            {recipe.comments.map((comment, index) => (
              <li key={index} className="bg-gray-100 p-2 rounded-md">
                <p className="font-semibold">{comment.user?.username}</p>
                <p>{comment.content}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={handleCommentChange}
              className="w-full p-2 border rounded-md"
              required
            />
            <button
              onClick={handleCommentSubmit}
              className="mt-2 bg-blue-500 text-white py-1 px-4 rounded-md hover:bg-blue-600"
            >
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
