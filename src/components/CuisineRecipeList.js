import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "./Layout";

export default function CuisineRecipeList() {
  const [recipes, setRecipes] = useState([]);
  const { id } = useParams();
  const backendBaseUrl = "http://localhost:3001";

  useEffect(() => {
    fetch(`${backendBaseUrl}/api/v1/cuisines/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, [id]);

  return (
    <Layout>
      <div className="mt-20 flex flex-wrap gap-4 justify-center">
        {recipes.map((recipe) => (
          <div className="rounded-lg overflow-hidden shadow-md bg-white w-64 cursor-pointer">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
