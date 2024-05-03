import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Particle from "./Particles";
import univer from "../images/univer.png";
import ecom from "../images/ecom.png";
import travel from "../images/travel.png";
import ia from "../images/IA.png";
import d from "../images/3D.png";
import calculator from "../images/calculator.png";
import bmc from "../images/BMC.png";

function Projects() {
  return (
    <Container fluid className="" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ textAlign: "center" }}>
          My Recent <strong className="Blue">Works </strong>
        </h1>
        <p style={{ color: "white",textAlign: "center" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={univer}
              isBlog={false}
              title="University"
              ghLink="https://github.com/AhmedElghoula/EventPlatform"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E commerce Website"
              ghLink="https://github.com/AhmedElghoula/EventPlatform"
            />
          </Col>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ia}
              isBlog={false}
              title="Prompt IA"
              ghLink="https://github.com/AhmedElghoula/promptIA"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="TravelBook"
              ghLink="https://github.com/AhmedElghoula/TravelBook"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={d}
              isBlog={false}
              title="3D Tshirt Customizations "
              ghLink="https://github.com/AhmedElghoula/3D_TshirtCustomizations"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              ghLink="https://github.com/AhmedElghoula/Calculator-app"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bmc}
              isBlog={false}
              title="Body Shape Indicator"
              ghLink="https://github.com/AhmedElghoula/Body-shape-indicator"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
