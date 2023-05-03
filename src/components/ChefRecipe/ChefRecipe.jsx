import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import pasta from "../../assets/launch food.jpg";
import pizza from "../../assets/licensed-image.jpg";
import chicken from "../../assets/Chicken-Parmesan-1.jpg";

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
    <Card className="mx-auto mt-5" style={{ width: "30rem" }}>
      <Card.Img variant="top" src={chefImage} />
      <Card.Body>
        <Card.Title>Name: {chefName}</Card.Title>

        <Card.Text>Number of Recipes: {numberOfRecipes}</Card.Text>
        <Card.Text>Likes: {likes}</Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Text>Experience: {yearsOfExperience}</Card.Text>
        <Card.Text>Description: {description}</Card.Text>
      </Card.Body>
      <br />
      <hr />
      <CardGroup className="gap-2">
        <Card>
          <Card.Img variant="top" src={pasta} />
          <Card.Body>
            <Card.Title>Pasta</Card.Title>
            <Card.Text>
              Ingredients: 1 pound pizza dough, 1/2 cup tomato sauce, 8 ounces
              fresh mozzarella cheese, sliced Fresh basil leaves Olive oil Salt
              and pepper
            </Card.Text>
            <p>
              Cocking Method: Preheat your oven to 450°F (232°C). Roll out the
              pizza dough on a floured surface. Place the dough on a pizza pan
              or baking sheet. Spread the tomato sauce over the dough. Top with
              the mozzarella cheese and fresh basil leaves. Drizzle with olive
              oil and season with salt and pepper to taste. Bake for 12-15
              minutes or until the crust is golden brown and the cheese is
              melted
            </p>
          </Card.Body>
          <Card.Footer>
            <Button variant="danger">Favourite Button</Button>{" "}
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={pizza} />
          <Card.Body>
            <Card.Title>Pizza</Card.Title>
            <Card.Text>
              Ingredients: 1 pound pizza dough 1/2 cup tomato sauce 8 ounces
              fresh mozzarella cheese, sliced Fresh basil leaves Olive oil Salt
              and pepper
            </Card.Text>
            <p>
              Cooking method: Preheat your oven to 450°F (232°C). Roll out the
              pizza dough on a floured surface. Place the dough on a pizza pan
              or baking sheet. Spread the tomato sauce over the dough. Top with
              the mozzarella cheese and fresh basil leaves. Drizzle with olive
              oil and season with salt and pepper to taste. Bake for 12-15
              minutes or until the crust is golden brown and the cheese is
              melted.
            </p>
          </Card.Body>
          <Card.Footer>
            <Button variant="danger">Favourite Button</Button>{" "}
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={chicken} />
          <Card.Body>
            <Card.Title>Chicken Parmesan</Card.Title>
            <Card.Text>
              Ingredients: 4 boneless, skinless chicken breasts 1 cup
              all-purpose flour 2 eggs, beaten 1 cup Italian breadcrumbs 1 cup
              marinara sauce 8 ounces mozzarella cheese, shredded Fresh basil
              leaves Salt and pepper
            </Card.Text>
            <p>
              Cooking method: Preheat your oven to 375°F (190°C). Season the
              chicken breasts with salt and pepper. Dredge the chicken in the
              flour, dip in the beaten eggs, and coat in the Italian
              breadcrumbs. Heat oil in a large skillet over medium heat. Add the
            </p>
          </Card.Body>
          <Card.Footer>
            <Button variant="danger">Favourite Button</Button>{" "}
          </Card.Footer>
        </Card>
      </CardGroup>
    </Card>
  );
};

export default ChefRecipe;
