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
      <div className="mt-10 flex">
        <div className="w-1/3">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="h-80 w-full object-cover"
          />
        </div>
        <div className="w-2/3 p-4">
          <h2 className="text-2xl font-semibold mb-2">{recipe.name}</h2>
          <h3 className="text-xl font-medium mb-2">Ingredients:</h3>
          <ul className="list-disc pl-6 mb-4">
            {recipe.ingredients.split(",").map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3 className="text-xl font-medium mb-2">Instructions:</h3>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </Layout>
  );
}
