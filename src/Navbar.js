import {
  faAddressCard,
  faFolder,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  return (
    <Container className="navbar py-2 col-sm-1 vh-100 position-fixed">
      <Row className="align-items-center h-100">
        <Col sm={1}>
          <Row>
            <Col sm={12}>
              <Link
                activeClass="active"
                to="about-container"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                className="navItem"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon
                  icon={faAddressCard}
                  style={{ color: "white" }}
                />
                <p className="navItemText">About</p>
              </Link>
            </Col>
            <Col sm={12}>
              <Link
                activeClass="active"
                to="projects-container"
                spy={true}
                smooth={true}
                duration={500}
                offset={10}
                className="navItem"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faFolder} style={{ color: "white" }} />{" "}
                <p className="navItemText">Projects</p>
              </Link>
            </Col>
            <Col sm={12}>
              <Link
                activeClass="active"
                to="articles-container"
                spy={true}
                smooth={true}
                duration={500}
                offset={-10}
                className="navItem"
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon
                  icon={faNewspaper}
                  style={{ color: "white" }}
                />{" "}
                <p className="navItemText">Presence</p>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
