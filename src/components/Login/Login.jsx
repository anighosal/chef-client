import React, { useContext, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import app from "../../firebase/firebase.config";

const Login = () => {
  const auth = getAuth(app);
  console.log(app);
  const provider = new GoogleAuthProvider();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <Container className="md:mx-auto md:w-25">
      <h3>Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>{" "}
        <br />
        <Form.Text className="text-secondary">
          Don't have an account <Link to="/register">Register</Link>
        </Form.Text>{" "}
        <br />
        <Form.Text className="text-danger"></Form.Text>
      </Form>
      <Link to="/">
        {" "}
        <Button onClick={handleGoogleSignIn} variant="secondary">
          Google sign-in
        </Button>{" "}
      </Link>
      <Link to="/">
        <Button variant="secondary">Github sign-in</Button>{" "}
      </Link>
    </Container>
  );
};

export default Login;
