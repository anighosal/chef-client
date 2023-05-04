import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess("");
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;

    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);

        const auth = getAuth();
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        setRegisterError("");
        event.target.reset();
        setSuccess("User has been created succesfully");
      })
      .catch((error) => {
        console.error(error.message);
        setRegisterError(error.message);
      });
  };
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };
  return (
    <Container className="md:mx-auto md:w-25">
      <h3>Create Account</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control
            type="photoURL"
            name="photo"
            placeholder="photoURL"
            required
          />
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label={
              <>
                Accept <Link to="/terms">Terms And Conditions</Link>
              </>
            }
          />
        </Form.Group>
        <p className="text-danger">{registerError}</p> <br />
        <p className="text-success">{success}</p> <br />
        <Button variant="primary" disabled={!accepted} type="submit">
          Register
        </Button>{" "}
        <br />
        <Form.Text className="text-secondary">
          Already Have An Account <Link to="/login">Please Login</Link>
        </Form.Text>{" "}
        <br />
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
