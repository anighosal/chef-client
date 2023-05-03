import React from "react";

import error from "./assets/error png.png";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container>
      <img src={error} alt="" />
      <Link to="/">
        {" "}
        <Button variant="danger">Back to Home</Button>{" "}
      </Link>
    </Container>
  );
};

export default Error;
