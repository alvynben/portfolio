import React from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import WorkExperience from "./containers/WorkExperience/WorkExperience";
import Projects from "./containers/Projects/Projects";
import Skills from "./containers/Skills/Skills";
import Education from "./containers/Education/Education";
import cvPDF from "assets/CV.pdf";

const Header = () => (
  <Col
    className="text-center text-sm-end"
    xs={{ span: 12, offset: 0 }}
    sm={{ span: 8, offset: 4 }}
  >
    <h1 id="aboutTitle">ALVIN BEN ABRAHAM</h1>
    <ButtonGroup size="sm">
      <Button
        onClick={() => {
          window.open("https://linkedin.com/in/alvinbenabraham", "_blank");
        }}
      >
        <FontAwesomeIcon icon={faLinkedin as IconProp} /> Linkedin
      </Button>
      <Button
        onClick={() => {
          window.open("https://github.com/alvynben", "_blank");
        }}
        variant="secondary"
      >
        <FontAwesomeIcon icon={faGithub as IconProp} /> GitHub
      </Button>

      <Button variant="danger">
        <a style={{textDecoration: 'none', color: '#fff'}} href={cvPDF} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFilePdf as IconProp} /> Resume
        </a>
      </Button>
    </ButtonGroup>
  </Col>
);

export default function Resume() {
  return (
    <>
      <Container className="py-4 resume-container" id="resume-container" fluid>
        <Row className="align-self-center">
          <Header />
          <Education />
          <Skills />
          <WorkExperience />
          <Projects />
          {/* <Col sm={12}>
            <h1>Co-Curricular Activities</h1>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}
