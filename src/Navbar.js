import {
  faAddressCard,
  faFolder,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  return (
    <Container className="navbar py-2 col-sm-1 vh-100 position-fixed">
      <Row className="align-items-center h-100">
        
        
          <Link
            activeClass="active"
            to="projectsTitle"
            spy={true}
            smooth={true}
            duration={500}
            className="navItem"
            style={{ textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faFolder} style={{color: "white"}} />{' '}
            <p>Projects</p>
          </Link>
        

        <Link
          activeClass="active"
          to="articlesTitle"
          spy={true}
          smooth={true}
          duration={500}
          className="navItem"
          style={{ textDecoration: "none" }}
        >
          <FontAwesomeIcon icon={faNewspaper} style={{color: "white"}} />{' '}
          <p>Articles</p>
        </Link>

        <Link
          activeClass="active"
          to="aboutTitle"
          spy={true}
          smooth={true}
          duration={500}
          className="navItem"
          style={{ textDecoration: "none" }}
        >
          <FontAwesomeIcon icon={faAddressCard} style={{ color: "white" }} />
          <p>About</p>
        </Link>
      </Row>
    </Container>
  );
}
