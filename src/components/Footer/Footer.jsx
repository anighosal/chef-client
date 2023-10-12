import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../../public/download .png";

const Footer = () => {
  return (
    <div className="upper-shadow ">
      <Container className="text-black mt-5 pt-3 w-[90%]">
        <Row className="mx-auto ps-5 w-[90%] pt-3 mt-5">
          <Col xs={12} md={3} className="text-center text-md-start">
            <h4 style={{ fontFamily: "sans-serif", fontStyle: "bold" }}>
              Menu
            </h4>
            <p style={{ fontFamily: "sans-serif", fontStyle: "normal" }}>
              Starter <br />
              Main <br />
              Snacks <br />
              Dessert
            </p>
          </Col>
          <Col xs={12} md={3} className="text-center text-md-start">
            <h4 style={{ fontFamily: "sans-serif", fontStyle: "bold" }}>
              Chefs
            </h4>
            <p style={{ fontFamily: "sans-serif", fontStyle: "normal" }}>
              Gennaro Contaldo <br />
              Giada De Laurentiis <br />
              Antonio Carluccio <br />
              Mario Batali
            </p>
          </Col>
          <Col xs={12} md={3} className="text-center text-md-start">
            <h4 style={{ fontFamily: "sans-serif", fontStyle: "bold" }}>
              Address
            </h4>
            <p style={{ fontFamily: "sans-serif", fontStyle: "normal" }}>
              323 Main Street, Suite 456 <br /> Anytown State/Province: Any
              State/Province 32345 <br />
              United States <br /> Phone number: +1 (123) 456-7890
            </p>
          </Col>
          <Col xs={12} md={3} className="text-center">
            <img
              className="w-100 mt-5"
              src={img}
              alt="name"
              style={{ maxWidth: "200px", height: "auto", opacity: "0.8" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
