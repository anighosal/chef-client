import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefRecipe = () => {
  const sigleChef = useLoaderData();
  const { chefName } = sigleChef;
  console.log(sigleChef);
  return (
    <div>
      <h2>{chefName}</h2>
    </div>
  );
};

export default ChefRecipe;
