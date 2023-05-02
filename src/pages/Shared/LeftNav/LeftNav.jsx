import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const LeftNav = () => {
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
        <p key={chef.id}>
          <Link>{chef.chefName}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftNav;
