import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import App from "./App";
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SignUpForm />,
  },
]);

createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router} />
    <App />
  </div>
);
