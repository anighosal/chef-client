import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import menu from "../../assets/menu (2).jpg";
import "./Menu.css";

const Menu = () => {
  return (
    <Container className="mt-5 w-[90%]">
      <Row className="mx-auto ">
        <Col xs={12} md={6}>
          <img src={menu} className="img ms-5 full-img" alt="" />
        </Col>
        <Col xs={12} md={6}>
          <h2
            className="mt-5 pt-5 mb-3 custom-text  text-start"
            style={{
              fontFamily: "sans-serif",
              fontStyle: "bold",
              fontSize: "24px",
            }}
          >
            Menu Selections{" "}
          </h2>
          <p
            className="text-start"
            style={{
              fontFamily: "sans-serif",
              fontStyle: "medium",
              fontSize: "20px",
            }}
          >
            Diverse Range of Menus to Suit Various Events and Preferences
          </p>
          <p
            className="text-start"
            style={{
              fontFamily: "sans-serif",
              fontStyle: "medium",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit
            tellus, luc tusnecullamc orper mattis, pulvinar dapibus leo. Lorem
            ipsum dow lor sit ametconsect etur adipiscingel.
          </p>
          <button className="button-style  text-md-start">Discover Menu</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Menu;
