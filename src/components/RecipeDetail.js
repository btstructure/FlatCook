import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "./Layout";

export default function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  const backendBaseUrl = "http://localhost:3001";

  useEffect(() => {
    fetch(`${backendBaseUrl}/api/v1/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data);
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

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
      </div>
    </Layout>
  );
}
