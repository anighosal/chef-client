import React from "react";
import { Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const ChefRecipe = () => {
  const sigleChef = useLoaderData();
  const {
    chefName,
    chefImage,
    numberOfRecipes,
    yearsOfExperience,
    likes,
    description,
  } = sigleChef;
  console.log(sigleChef);
  return (
    <Card className="text-center mb-4">
      <Card.Img
        style={{ height: "500px", width: "200px" }}
        variant="top"
        src={chefImage}
      />

      <Card.Header>Name: {chefName}</Card.Header>
      <Card.Body>
        <Card.Title>Numbers of recipes: {numberOfRecipes}</Card.Title>
        <Card.Text>Years of experience: {yearsOfExperience}</Card.Text>
        <Card.Text>Likes: {likes}</Card.Text>
        <Card.Text>Bio: {description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ChefRecipe;
