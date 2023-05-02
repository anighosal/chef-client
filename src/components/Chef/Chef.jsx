import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const {
    id,
    chefName,
    ChefPicture,
    likes,
    viewRecipesButton,
    numberOfRecipes,
    yearsOfExperience,
  } = chef;
  return (
    <Card className="text-center mb-4">
      <Card.Img variant="top" src={ChefPicture} />
      <Card.Header>Name: {chefName}</Card.Header>
      <Card.Body>
        <Card.Title>Numbers of recipes: {numberOfRecipes}</Card.Title>
        <Card.Text>Years of experience: {yearsOfExperience}</Card.Text>
        <Card.Text>Likes: {likes}</Card.Text>
        <Link>
          <Button variant="danger">{viewRecipesButton}</Button>
        </Link>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default Chef;
