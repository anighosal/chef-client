import React from "react";
import Header from "../Header/Header";
import { useLoaderData } from "react-router-dom";
import AllChef from "../AllChef/AllChef";
import Section from "../Section/Section";
import Menu from "../Menu/Menu";

const Home = () => {
  return (
    <div>
      <AllChef></AllChef>
      <Section></Section>
      <Menu></Menu>
    </div>
  );
};

export default Home;
