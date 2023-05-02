import React from "react";
import banner from "../../assets/fotor_2023-5-2_1_42_55.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Container className="mb-5">
      <Row className="align-items-center">
        <Col className="text-danger fw-bold ms-5">
          <h1 className="fw-bold">
            "Satisfy Your Cravings <br /> with Our Delicious <br /> Food Zone!"
          </h1>
          <Button className="text-black" variant="warning">
            Order Now and Taste the Goodness
          </Button>{" "}
        </Col>
        <Col className="mt-5">
          <img src={banner} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
