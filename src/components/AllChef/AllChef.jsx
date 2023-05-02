import React from "react";
import { useLoaderData } from "react-router-dom";
import Chef from "../Chef/Chef";
import { Row } from "react-bootstrap";

const AllChef = () => {
  const chefData = useLoaderData();
  console.log(chefData);
  return (
    <div>
      <h2 className="text-center mt-5">Top 6 italian chef here</h2>
      <Row>
        {chefData.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </Row>
    </div>
  );
};

export default AllChef;
