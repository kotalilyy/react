import React from "react";
import "../../styles/style.css";
import me from "../../images/me.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Home = () => (
  <Container id="container">
    <Row>
      <Col xs={6} md={4}>
        <Image src={me} />
      </Col>
      <Col xs={12} md={8}>
        <h1>AboutMe</h1>
        <p id="about">
          Hi, I'm Dakota Nelson and this is my Portfolio. I am currently
          attending a Full-stack Coding Bootcamp at the University of Texas at
          Austin. I am devoted to a lifetime of learning, so I can aquire the
          skills to become a Web Developer.
        </p>
      </Col>
    </Row>
  </Container>
);

export default Home;
