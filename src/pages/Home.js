import React from "react";
import "../styles/styles.css";
import me from "../components/images/me.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Home = () => (
  <Container id="container">
    <center>
      <Row>
        <Col xs={6} md={4}>
          <Image src={me} />
        </Col>
        <Col xs={12} md={8}>
          <p id="about">
            <h1>
              {" "}
              Hi, I am Dakota Nelson. I am a recent graduate of a Full-stack
              Coding Bootcamp at the University of Texas at Austin. I am devoted
              to a lifetime of learning, so that I may aquire the skills
              neccessary to become a Web Developer.
            </h1>
          </p>
        </Col>
      </Row>
    </center>
  </Container>
);

export default Home;
