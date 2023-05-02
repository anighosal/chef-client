import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="bg-black mt-5">
      <Row>
        <Col className="text-white">
          <h1>Menu</h1>
          <p>Starter</p>
          <p>Main</p>
          <p>Snacks</p>
          <p>Dessert</p>
        </Col>
        <Col className="text-white">
          <h1>Chefs</h1>
          <p>Gennaro Contaldo</p>
          <p>Giada De Laurentiis</p>
          <p>Antonio Carluccio</p>
          <p>Mario Batali</p>
        </Col>
        <Col className="text-white">
          <h1>Address</h1>
          <p>
            Name: Food Zone <br /> Address: 123 Main Street, Suite 456 <br />{" "}
            City: Anytown State/Province: Any State/Province Postal code: 12345
            Country: United States <br /> Phone number: +1 (123) 456-7890
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
