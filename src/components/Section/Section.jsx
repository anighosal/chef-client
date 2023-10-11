import React from "react";
import breakfast from "../../assets/breakfast food.jpg";
import lunch from "../../assets/launch food.jpg";
import even from "../../assets/evening food.jpg";
import dinner from "../../assets/dinner food.jpg";

import { Col, Container, Row } from "react-bootstrap";

const Section = () => {
  return (
    <Container className="w-[90%]">
      <h2
        className="mt-3 mb-5 ms-5 custom-text"
        style={{
          fontFamily: "sans-serif",
          fontStyle: "bold",
          fontSize: "24px",
          textAlign: "center",
        }}
      >
        Our Food Item{" "}
      </h2>
      <Row
        className={`w-[90%] ${
          window.innerWidth <= 768
            ? "justify-content-center align-items-center"
            : "ms-5"
        }`}
      >
        <Col className="food-col">
          <p className="text-center">Breakfast</p>
          <div
            className={`text-center ${
              window.innerWidth <= 768 ? "center-image" : ""
            }`}
          >
            <img src={breakfast} alt="" className="full-width-image" />
          </div>
        </Col>
        <Col className="food-col">
          <p className="text-center">Lunch</p>
          <div
            className={`text-center ${
              window.innerWidth <= 768 ? "center-image" : ""
            }`}
          >
            <img src={lunch} alt="" className="full-width-image" />
          </div>
        </Col>
        <Col className="food-col">
          <p className="text-center">Evening snacks</p>
          <div
            className={`text-center ${
              window.innerWidth <= 768 ? "center-image" : ""
            }`}
          >
            <img src={even} alt="" className="full-width-image" />
          </div>
        </Col>
        <Col className="food-col">
          <p className="text-center">Dinner</p>
          <div
            className={`text-center ${
              window.innerWidth <= 768 ? "center-image" : ""
            }`}
          >
            <img src={dinner} alt="" className="full-width-image" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
