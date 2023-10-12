import React, { useState } from "react";
import { Container, Tabs, Tab, Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Rating from "../Rating/Rating";
import { FaHeart } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Chefs3recipe = () => {
  const sigleChef = useLoaderData();
  const {
    chefName,
    rating,
    likes,
    cookingMethod,
    ingredients,
    recipeImage,
    chefWords,
    recipes,
  } = sigleChef;

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      toast.success("Recipe added to favorites!", {
        position: "bottom-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <Container className="mt-5 bg chef-recipe-container">
      <Tabs
        defaultActiveKey={recipes.length > 0 ? recipes[0].id : "home"}
        id="recipe-tabs"
        className="mb-3 nav-tabs"
        justify
      >
        {recipes?.map((recipe) => (
          <Tab
            key={recipe?.id}
            eventKey={recipe?.id}
            title={recipe?.recipeName}
          >
            <Row className="mt-5" key={recipe.id} noGutters>
              <Col className="ms-5">
                <img
                  style={{ width: "500px", height: "500px" }}
                  src={recipe.recipeImage}
                  className="image-center img chef-photo ms-5"
                  alt=""
                />
                <Row className="d-flex mb-3">
                  <Col className="ms-5 mr-5 mt-2">
                    <Rating
                      style={{ fontFamily: "sans-serif", fontStyle: "normal" }}
                      rating={recipe.rating}
                    />
                  </Col>

                  <Col
                    style={{ fontFamily: "sans-serif", fontStyle: "normal" }}
                    className="mt-2 ms-5 mr-5"
                  >
                    {likes} likes
                  </Col>
                  <Col className="mt-1 text-center">
                    <button
                      className={`favorite-button text-end  ${
                        isFavorite ? "favorite" : ""
                      }`}
                      onClick={toggleFavorite}
                    >
                      <FaHeart color={isFavorite ? "red" : "gray"} size={15} />
                    </button>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <h5 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
                  {chefName} says
                </h5>
                <p style={{ fontFamily: "sans-serif", fontStyle: "normal" }}>
                  {recipe.chefWords}
                </p>
                <div>
                  <h6 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
                    Cooking Method
                  </h6>
                  <p style={{ fontFamily: "sans-serif", fontStyle: "normal" }}>
                    {recipe.cookingMethod}
                  </p>
                </div>

                <div>
                  <h6 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
                    Ingredient
                  </h6>
                  <ul style={{ fontFamily: "sans-serif", fontWeight: "light" }}>
                    {recipe?.ingredients?.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </Tab>
        ))}
      </Tabs>
      <ToastContainer autoClose={2000} />
    </Container>
  );
};

export default Chefs3recipe;
