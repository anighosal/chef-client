import React, { useEffect, useState } from "react";

import Chef from "../Chef/Chef";

const AllChef = ({ chef }) => {
  const [allchef, setAllchef] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allchef/")
      .then((res) => res.json())
      .then((data) => setAllchef(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h2>All chef</h2>
      {allchef.map((chef) => (
        <Chef key={chef.id} chef={chef}></Chef>
      ))}
    </div>
  );
};

export default AllChef;
