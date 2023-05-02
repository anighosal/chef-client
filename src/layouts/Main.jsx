import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Shared/RightNav/RightNav";
import AllChef from "../pages/AllChef/AllChef";
import Section from "../pages/Shared/Section/Section";
import Wedding from "../pages/Shared/Wedding/Wedding";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <AllChef></AllChef>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Section></Section>
      <Wedding></Wedding>
      <Footer></Footer>
    </div>
  );
};

export default Main;
