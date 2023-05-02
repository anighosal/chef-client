import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, Link, createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./components/Home/Home";
import AllChef from "./components/AllChef/AllChef";
import Section from "./components/Section/Section";
import Menu from "./components/Menu/Menu";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allchef",
        element: <AllChef></AllChef>,
      },
      {
        path: "section",
        element: <Section></Section>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
