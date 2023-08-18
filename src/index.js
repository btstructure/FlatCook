import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import MainPage from "./components/MainPage";
import Favorites from "./components/Favorites";
import App from "./App";
import "./index.css";
import CuisineRecipeList from "./components/CuisineRecipeList";
import MyProfile from "./components/MyProfile";
import RecipeDetail from "./components/RecipeDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SignUpForm />,
  },
  {
    path: "/mainpage",
    element: <MainPage />,
  },
  {
    path: "/cuisine/:id",
    element: <CuisineRecipeList />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/myprofile",
    element: <MyProfile />,
  },
  {
    path: "/recipe/:id",
    element: <RecipeDetail />,
  },
]);

createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router} />
    <App />
  </div>
);
