import React from "react";
import Header from "../components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import ChefRecipe from "../components/ChefRecipe/ChefRecipe";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes("blog");
  const noNav = location.pathname.includes("/chef/:id/single");

  const hideHeaderFooterNav =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      {!hideHeaderFooterNav && <NavBar></NavBar>}
      {!hideHeaderFooterNav && <Header></Header>}
      <Outlet></Outlet>
      {!hideHeaderFooterNav && <Footer></Footer>}
    </div>
  );
};

export default Main;
