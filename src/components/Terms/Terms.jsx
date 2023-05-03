import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h2>Terms and consition</h2>
      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde maxime
        autem porro libero nesciunt vero consequuntur voluptate quia! Cum beatae
        perferendis exercitationem non necessitatibus nobis odit sed doloremque
        iure aliquid.{" "}
      </p>
      <p>
        Go back to <Link to="/register">Register</Link>{" "}
      </p>
    </Container>
  );
};

export default Terms;
