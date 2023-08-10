import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cuisines() {
  const [cuisines, setCuisines] = useState([]);

  const backendBaseUrl = "http://localhost:3001";

  useEffect(() => {
    fetch(`${backendBaseUrl}/api/v1/cuisines`)
      .then((response) => response.json())
      .then((data) => {
        setCuisines(data);
      })
      .catch((error) => console.error("Error fetching cuisines:", error));
  }, []);

  return (
    <div className="mt-20 flex flex-wrap gap-4 justify-center">
      {cuisines.map((cuisine) => (
        <Link key={cuisine.id} to={`/cuisine/${cuisine.id}`}>
          <div className="rounded-lg overflow-hidden shadow-md bg-white w-64 cursor-pointer">
            <img
              src={cuisine.image_url}
              alt={cuisine.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{cuisine.name}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Cuisines;
