import React from "react";
import { useLoaderData } from "react-router-dom";
import Chef from "../Chef/Chef";
import { Container, Row } from "react-bootstrap";
import "./AllChef.css";

const AllChef = () => {
  const chefData = useLoaderData();
  console.log(chefData);
  return (
    <div className="bg-chef">
      <Container className="w-[90%]">
        <h2
          className="mt-5 pt-5 mb-2 ms-5 custom-text"
          style={{
            fontFamily: "sans-serif",
            fontStyle: "bold",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          Meet our Top 6 Chef{" "}
        </h2>
        <p
          className="text-center mb-5"
          style={{
            fontFamily: "sans-serif",
            fontStyle: "bold",
            fontSize: "20px",
          }}
        >
          Here's a showcase of our top 6 chefs, each with their <br /> unique
          culinary expertise and a passion for <br /> creating delightful
          dishes.
        </p>

        <Row>
          {chefData.map((chef) => (
            <Chef key={chef.id} chef={chef}></Chef>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllChef;
