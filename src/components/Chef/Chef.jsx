import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FaFacebook, FaGithub } from "react-icons/fa";

const Chef = ({ chef }) => {
  const {
    id,
    chefName,
    chefImage,
    likes,
    viewRecipesButton,
    numberOfRecipes,
    yearsOfExperience,
  } = chef;
  return (
    <Col xs={12} md={4}>
      <Card className="mb-4 custom-card">
        <Card.Img
          style={{ height: "150px", width: "150px" }}
          variant="top"
          src={chefImage}
          className="image rounded-circle mx-auto my-auto"
        />

        <Card.Header
          className="fw-bold text-center"
          style={{
            fontFamily: "sans-serif",
          }}
        >
          {chefName}
        </Card.Header>
        <Card.Body>
          <Card.Text
            className="text-center"
            style={{
              fontFamily: "sans-serif",
              fontStyle: "medium",
            }}
          >
            {numberOfRecipes} Recipes <br />
            {yearsOfExperience} Years experience <br />
            {likes} likes <br />
            <div className="text-center">
              <FaFacebook style={{ color: "#1877F2", fontSize: "1.5rem" }} />{" "}
              <FaGithub style={{ color: "#000000", fontSize: "1.5rem" }} />
            </div>
          </Card.Text>
          <Link to={`/chef/${id}`}>
            <div className="bg-color rounded text-center">
              <a className="mx-4 my-1 text-white">{viewRecipesButton}</a>
            </div>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Chef;
