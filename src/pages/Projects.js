import React from "react";
import "../styles/styles.css";
import Container from "react-bootstrap/Container";
import onthescene from "../components/images/onthescene.png";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import rate from "../components/images/rate.png";
import unashamed1 from "../components/images/unashamed1.png";

const Projects = () => (
  <center>
    <Container id="container">
      <div>
        <h1>My Projects</h1>
        <Col xs={6} md={4}>
          <h2>
            <a href="https://github.com/kotalilyy/bc-project-1" target="_blank">
              On The Scene
            </a>
          </h2>
          <Image src={onthescene} />
        </Col>
      </div>
      <div>
        <Col xs={12} md={8}>
          <h2>
            <a
              href="https://github.com/kotalilyy/Rate-Your-Bootcamp"
              target="_blank"
            >
              Rate Your Bootcamp
            </a>
          </h2>
          <Image src={rate} />
        </Col>
      </div>
      <div>
        <Col xs={12} md={8}>
          <h2>
            <a href="https://github.com/kotalilyy/unashamed" target="_blank">
              Unashamed
            </a>
          </h2>
          <Image src={unashamed1} />
        </Col>
      </div>
    </Container>
  </center>
);

export default Projects;
