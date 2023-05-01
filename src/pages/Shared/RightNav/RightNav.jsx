import React from "react";
import breakfast from "../../../assets/breakfast food.jpg";
import launch from "../../../assets/launch food.jpg";
import evening from "../../../assets/evening food.jpg";
import dinner from "../../../assets/dinner food.jpg";

const RightNav = () => {
  return (
    <div className="bg-warning">
      <h2 className="text-danger">Yummy items here!!</h2>
      <div className="mt-3 text-center">
        <p className="text-white">Breakfast</p>
        <img src={breakfast} alt="" />
      </div>
      <div className="mt-3 text-center">
        <p className="text-white">Launch</p>
        <img src={launch} alt="" />
      </div>
      <div className="mt-3 text-center">
        <p className="text-white">Evening food</p>
        <img src={evening} alt="" />
      </div>
      <div className="mt-3 text-center">
        <p className="text-white">Dinner</p>
        <img src={dinner} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
