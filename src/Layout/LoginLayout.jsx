import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";

const LoginLayout = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes("blog");

  const hideHeaderFooterNav =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      {!hideHeaderFooterNav && <NavBar></NavBar>}
      {!hideHeaderFooterNav && <Header></Header>}
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;
