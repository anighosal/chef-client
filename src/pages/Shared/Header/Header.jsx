import React from "react";
import banner from "../../../assets/fotor_2023-5-2_0_52_49.jpg";

const Header = () => {
  return (
    <div>
      <div className="ms-5">
        <img fluid className="mt-5 pt-5" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Header;
