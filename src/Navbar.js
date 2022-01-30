import {
  faAddressCard,
  faArrowAltCircleRight,
  faBars,
  faFolder,
  faGamepad,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [viewLocation, setViewLocation] = useState("about-container");

  const moveToId = (id) => {
    const container = document.getElementById(id);
    window.scrollBy(0, container.getBoundingClientRect().top);
  };

  useEffect(() => {
    switch (viewLocation) {
      case "play":
        break;
      case "about-container":
        moveToId(viewLocation);
        break;
      case "projects-container":
        moveToId(viewLocation);
        break;
      case "articles-container":
        moveToId(viewLocation);
        break;
      default:
        break;
    }

    // if (viewLocation === "about") {
    //   moveToId('about-container');
    // }
  }, [viewLocation]);

  const navigateTo = useNavigate();

  return (
    <>
      <FontAwesomeIcon
        icon={faBars}
        className="d-sm-none"
        style={{ position: "fixed", left: 5, float: "left" }}
        size="3x"
      />
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
                    navigateTo("/");
                    setViewLocation("about-container");
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
                    navigateTo("/");
                    setViewLocation("projects-container");
                  }}
                >
                  Projects
                </p>
              </Col>
              <Col sm={12}>
                <FontAwesomeIcon
                  icon={faNewspaper}
                  style={{ color: "white" }}
                />{" "}
                <p
                  className="navItemText"
                  onClick={() => {
                    navigateTo("/");
                    setViewLocation("articles-container");
                  }}
                >
                  Presence
                </p>
              </Col>
              <Col sm={12}>
                <FontAwesomeIcon icon={faGamepad} style={{ color: "white" }} />{" "}
                <p
                  className="navItemText"
                  onClick={() => {
                    navigateTo("play");
                    setViewLocation("play");
                  }}
                >
                  Playground (WIP!)
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
