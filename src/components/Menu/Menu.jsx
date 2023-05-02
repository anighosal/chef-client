import React from "react";
import menu from "../../assets/home delivery.jpg";
import { Card } from "react-bootstrap";

const Menu = () => {
  return (
    <Card className="bg-dark text-white mt-5">
      <h2 className="text-center mt-5 text-White fw-bold">
        Our food menu & We provide home delivery service{" "}
      </h2>
      <Card.Img src={menu} alt="Card image" />
      <Card.ImgOverlay></Card.ImgOverlay>
    </Card>
  );
};

export default Menu;
