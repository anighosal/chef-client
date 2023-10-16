import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

import Chefs3recipe from "../Chefs3recipe/Chefs3recipe";
import { FaArrowDown } from "react-icons/fa";

const ChefRecipe = () => {
  const [rating, setRating] = useState(0);
  const sigleChef = useLoaderData();
  const {
    chefName,
    chefImage,
    numberOfRecipes,
    yearsOfExperience,
    likes,
    description,
    shortDescription,
  } = sigleChef;

  return (
    <div>
      <Container className="w-[90%] bg">
        <Row className="p-4">
          <Col xs={12} md={6}>
            {/* Apply CSS class for styling */}
            <img
              src={chefImage}
              style={{
                width: "400px",
                height: "400px",
              }} // Set fixed width and height
              className="square chef-photo ms-5"
              alt=""
            />
          </Col>
          <Col xs={12} md={6} className="mt-5 text-start">
            <h5 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
              {chefName}
            </h5>
            <p style={{ fontFamily: "sans-serif", fontWeight: "normal" }}>
              {numberOfRecipes} Recipes <br />
              {yearsOfExperience} Year experience <br />
              {likes} likes
            </p>
            <p style={{ fontFamily: "sans-serif", fontStyle: "normal" }}>
              {description}
            </p>
            <div>
              <h5 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
                Popular Three Recipes
              </h5>
              <p style={{ fontFamily: "sans-serif", fontWeight: "normal" }}>
                {shortDescription}
              </p>
            </div>
            {/* <p
              className="mt-5"
              style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
            >
              Bellow 3 Recipes <FaArrowDown></FaArrowDown>
            </p> */}
          </Col>
        </Row>
      </Container>
      <Chefs3recipe></Chefs3recipe>
    </div>
  );
};

export default ChefRecipe;
