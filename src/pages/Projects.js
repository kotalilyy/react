import React from "react";
import "../styles/styles.css";
import Container from "react-bootstrap/Container";
import onthescene from "../components/images/onthescene.png";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const Projects = () => (
  <Container id="container">
    <h1>My Projects</h1>
    <Col xs={6} md={4}>
    <Image src={onthescene} />
    </Col>
    <Col xs={12} md={8}></Col>
  </Container>
);

export default Projects;
