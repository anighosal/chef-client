import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const {
    id,
    chefName,
    chefImage,
    likes,
    viewRecipesButton,
    numberOfRecipes,
    yearsOfExperience,
  } = chef;
  return (
    <Col md={4}>
      <Card className="text-center mb-4">
        <Card.Img style={{ height: "500px" }} variant="top" src={chefImage} />

        <Card.Header>Name: {chefName}</Card.Header>
        <Card.Body>
          <Card.Title>Numbers of recipes: {numberOfRecipes}</Card.Title>
          <Card.Text>Years of experience: {yearsOfExperience}</Card.Text>
          <Card.Text>Likes: {likes}</Card.Text>
          <Link to={`/chef/${id}`}>
            <Button variant="danger">{viewRecipesButton}</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Chef;
