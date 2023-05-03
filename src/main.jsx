import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  RouterProvider,
  Link,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home/Home";

import Section from "./components/Section/Section";
import Menu from "./components/Menu/Menu";
import Blog from "./components/Blog/Blog";
import Main from "./Layout/Main";
import ChefRecipe from "./components/ChefRecipe/ChefRecipe";

import AuthProvider from "./providers/AuthProvider";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/allchef"),
      },
      {
        path: "/chef/:id",
        element: <ChefRecipe></ChefRecipe>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allchef/${params.id}`),
      },

      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
