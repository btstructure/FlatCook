import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const backendBaseUrl = "http://localhost:3001";

  const handleLogout = () => {
    
    fetch(`${backendBaseUrl}/api/v1/logout`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Logout failed: " + response.status);
        }
        return response.json();
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error during logout:", error.message);
      });
  };

  return (
    <div>
      <nav className="bg-white rounded-t-md shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div>
              <Link
                to="/"
                className="text-black text-xl font-semibold hover:opacity-80"
              >
                Flatcook
              </Link>
            </div>
            <div>
              <button
                onClick={handleLogout}
                className="text-black hover:text-opacity-80 font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainPage;
