import React from "react";
import "../styles/styles.css";
import Container from "react-bootstrap/Container";
import letscollab from "../components/images/letscollab.png";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";


const Contact = () => (
  <Container id="container">
    <div>
      <center>
      <h1>Get in touch with me!</h1>
      <h2>kotalilyy@gmail.com</h2>
      <h2><a href="https://www.linkedin.com/in/dakotaraenelson/" target="_blank">My Linkedin</a></h2>
      <h2><a href="https://github.com/kotalilyy" target="_blank">My Github</a></h2>
      <Col xs={6} md={4}>
          <Image src={letscollab} />
        </Col>
      </center>
    </div>
   </Container>
);
export default Contact;
