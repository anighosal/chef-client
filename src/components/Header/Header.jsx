import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import img1 from "../../assets/banner1.png";
import img2 from "../../assets/banner2.png";
import img3 from "../../assets/banner3.jpg";

const Header = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes("blog");
  if (noHeaderFooter) {
    return null;
  }
  return (
    <Container className="mb-5 md:w-[90%] w-full header">
      <Row className="align-items-center flex">
        <Col className="text-primary-emphasis fw-bold ms-5">
          <h2
            className="fw-bold"
            style={{ fontFamily: "sans-serif", fontStyle: "bold" }}
          >
            Satisfy Your Cravings with Our Delicious{" "}
            <span className="custom-text">Food Zone!</span>
          </h2>
          <p style={{ fontFamily: "sans-serif", fontStyle: "italic" }}>
            Indulge in a culinary journey like no other.Experience the finest
            ingredients and flavors.We are dedicated to providing you with the
            best dining experience
          </p>
        </Col>

        <Col className="mt-5">
          <Carousel fade>
            <Carousel.Item>
              <div className="img-container">
                <img className="img" src={img1} alt="name" />
              </div>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="img-container">
                <img className="img" src={img2} alt="name" />
              </div>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="img-container">
                <img className="img" src={img3} alt="name" />
              </div>
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
