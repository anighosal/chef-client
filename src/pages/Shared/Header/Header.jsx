import React from "react";
import banner from "../../../assets/fotor_2023-5-2_1_42_55.jpg";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Container className="mb-5">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand className="text-danger fw-bold" href="#home">
            Food Zone
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="text-danger" href="#features">
                Home
              </Nav.Link>
              <Nav.Link className="text-danger" href="#pricing">
                Blog
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="danger">Login</Button>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
