import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import img from "../../../public/download .png";
import "./Navbar.css";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="nav-bg w-[90%]">
      <Container className="">
        <Navbar
          sticky="top"
          style={{ zIndex: 100 }}
          collapseOnSelect
          expand="lg"
        >
          <Container>
            <Navbar.Brand className="w-10">
              <img
                src={img}
                alt=""
                style={{ width: "150px", height: "auto" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto gap-2">
                <NavLink
                  className="nav-link custom-link nav-tabs"
                  style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                  activeClassName="active"
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className="nav-link custom-link nav-tabs"
                  style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                  activeClassName="active"
                  to="/blog"
                >
                  Blog
                </NavLink>
              </Nav>
              <Nav className="rounded-full">
                {user && <FaUserCircle style={{ fontSize: "2rem" }} />}

                {user ? (
                  <Button
                    className="rounded-full btn custom-btn text-white"
                    onClick={handleLogOut}
                  >
                    Log out
                  </Button>
                ) : (
                  <Link to="/login">
                    <Button className="rounded-full btn custom-btn text-white">
                      Login
                    </Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavBar;
