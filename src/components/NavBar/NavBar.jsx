import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand className="text-danger fw-bold">Food Zone</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="text-danger" href="#features">
                <NavLink to="/">Home</NavLink>
              </Nav.Link>
              <Link to="/blog">
                {" "}
                <Nav.Link className="text-danger">Blog</Nav.Link>
              </Link>
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
    </div>
  );
};

export default NavBar;
