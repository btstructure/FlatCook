import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import MainPage from "./components/MainPage"
import App from "./App";
import './index.css';
import CuisineDishes from "./components/CuisineRecipes";
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
    path : "/mainpage",
    element: <MainPage />
  },
  {
    path: "/cuisine/:id",
    element: <CuisineDishes />
  }
]);

createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router} />
    <App />
  </div>
);
