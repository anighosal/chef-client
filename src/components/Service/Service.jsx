import React from "react";
import "./Service.css";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/dinner.jpg";
import img2 from "../../assets/meal.jpg";
import img3 from "../../assets/catering.jpg";
import img4 from "../../assets/cooking.jpg";

const Service = () => {
  return (
    <div className="bg-chef w-[90%]">
      <Container className=" px-5 w-[90%]">
        <h2
          className="mt-5 pt-5 mb-2 ms-5 custom-text"
          style={{
            fontFamily: "sans-serif",
            fontStyle: "bold",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          Our Services{" "}
        </h2>
        <p
          className="text-center mb-5"
          style={{
            fontFamily: "sans-serif",
            fontStyle: "bold",
            fontSize: "20px",
          }}
        >
          Providing Exceptional Service Creating <br /> Remarkable Dishes
        </p>
        <Row
          className={`w-[90%] ${
            window.innerWidth <= 768
              ? "justify-content-center align-items-center"
              : "ms-5"
          }`}
        >
          <Col md={3} className="service-item">
            <div
              className={`text-center ${
                window.innerWidth <= 768 ? "center-image" : ""
              }`}
            >
              <img src={img1} alt="Service 1" className="service-image" />
            </div>

            <h5
              className="mt-3"
              style={{
                fontFamily: "sans-serif",
                fontStyle: "bold",

                textAlign: "center",
              }}
            >
              Dinner Service
            </h5>
            <p
              style={{
                fontFamily: "sans-serif",
                fontStyle: "normal",

                textAlign: "center",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </Col>
          <Col md={3} className="service-item">
            <div
              className={`text-center ${
                window.innerWidth <= 768 ? "center-image" : ""
              }`}
            >
              <img src={img2} alt="Service 1" className="service-image" />
            </div>
            <h5
              className="mt-3"
              style={{
                fontFamily: "sans-serif",
                fontStyle: "bold",

                textAlign: "center",
              }}
            >
              Meal Prepping Service
            </h5>
            <p
              style={{
                fontFamily: "sans-serif",
                fontStyle: "normal",

                textAlign: "center",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </Col>
          <Col md={3} className="service-item">
            <div
              className={`text-center ${
                window.innerWidth <= 768 ? "center-image" : ""
              }`}
            >
              <img src={img3} alt="Service 1" className="service-image" />
            </div>
            <h5
              className="mt-3"
              style={{
                fontFamily: "sans-serif",
                fontStyle: "bold",

                textAlign: "center",
              }}
            >
              Catering Service
            </h5>
            <p
              style={{
                fontFamily: "sans-serif",
                fontStyle: "normal",

                textAlign: "center",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </Col>
          <Col md={3} className="service-item">
            <div
              className={`text-center ${
                window.innerWidth <= 768 ? "center-image" : ""
              }`}
            >
              <img src={img4} alt="Service 1" className="service-image" />
            </div>
            <h5
              className="mt-3"
              style={{
                fontFamily: "sans-serif",
                fontStyle: "bold",

                textAlign: "center",
              }}
            >
              Cooking Classes
            </h5>
            <p
              style={{
                fontFamily: "sans-serif",
                fontStyle: "normal",

                textAlign: "center",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
