import {
  faAddressCard,
  faArrowAltCircleRight,
  faBars,
  faFolder,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Navbar() {
  const moveToId = (id) => {
    const container = document.getElementById(id);
    window.scrollBy(0, container.getBoundingClientRect().top);
  };

  return (
    <>
    <FontAwesomeIcon icon={faBars} className="d-sm-none" style={{position: "fixed", left: 5, float: "left"}} size="3x"/>
    <Container className="navbar py-2 d-none d-sm-block col-sm-1 vh-100 position-fixed">
      <Row className="align-items-center h-100">
        <Col sm={1}>
          <Row>
            <Col sm={12}>
              <FontAwesomeIcon
                icon={faAddressCard}
                style={{ color: "white" }}
              />
              <p
                className={`navItemText`}
                onClick={() => {
                  moveToId("about-container");
                }}
              >
                About
              </p>
            </Col>
            <Col sm={12}>
              <FontAwesomeIcon icon={faFolder} style={{ color: "white" }} />{" "}
              <p
                className="navItemText"
                onClick={() => {
                  moveToId("projects-container");
                }}
              >
                Projects
              </p>
            </Col>
            <Col sm={12}>
              <FontAwesomeIcon icon={faNewspaper} style={{ color: "white" }} />{" "}
              <p
                className="navItemText"
                onClick={() => {
                  moveToId("articles-container");
                }}
              >
                Presence
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </>
  );
}
