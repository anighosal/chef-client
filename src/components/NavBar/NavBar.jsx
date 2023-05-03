import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Navbar style={{ zIndex: 100 }} collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand className="text-danger fw-bold">Food Zone</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto gap-2">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "default")}
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className={({ isActive }) => (isActive ? "active" : "default")}
                to="/blog"
              >
                Blog
              </NavLink>
            </Nav>
            <Nav>
              {user && <FaUserCircle style={{ fontSize: "2rem" }} />}

              {user ? (
                <Button onClick={handleLogOut} variant="danger">
                  Log out
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="danger">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
