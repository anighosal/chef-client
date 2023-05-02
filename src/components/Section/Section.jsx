import React from "react";
import breakfast from "../../assets/breakfast food.jpg";
import lunch from "../../assets/launch food.jpg";
import even from "../../assets/evening food.jpg";
import dinner from "../../assets/dinner food.jpg";

import { Col, Container, Row } from "react-bootstrap";

const Section = () => {
  return (
    <Container>
      <h2 className="text-center mt-5">Our food item</h2>
      <Row>
        <Col>
          <p>Breakfast</p>
          <img src={breakfast} alt="" />
        </Col>
        <Col>
          <p>Lunch</p>
          <img src={lunch} alt="" />
        </Col>
        <Col>
          <p>Evening snacks</p>
          <img src={even} alt="" />
        </Col>
        <Col>
          <p>Dinner</p>
          <img src={dinner} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
