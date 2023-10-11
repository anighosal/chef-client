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

import Blog from "./components/Blog/Blog";
import Main from "./Layout/Main";
import ChefRecipe from "./components/ChefRecipe/ChefRecipe";

import AuthProvider from "./providers/AuthProvider";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PrivateRoute from "./route/PrivateRoute";

import Error from "./Error";
import Chefs3recipe from "./components/Chefs3recipe/Chefs3recipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("chef-server-xi-three.vercel.app/allChef"),
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <ChefRecipe></ChefRecipe>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`chef-server-xi-three.vercel.app/allChef/${params.id}`),
      },
      {
        path: "/chef/:id",
        element: <Chefs3recipe></Chefs3recipe>,
        loader: ({ params }) =>
          fetch(`chef-server-xi-three.vercel.app/allChef/${params.id}`),
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
  {
    path: "*",
    element: <Error></Error>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
