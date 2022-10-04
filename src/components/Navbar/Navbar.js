import {
  faAddressCard,
  faFilePdf,
  faFolder,
  faGamepad,
  faNewspaper,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import "./Navbar.css";

export default function Navbar() {
  const [viewLocation, setViewLocation] = useState("about-container");

  const moveToId = (id) => {
    const container = document.getElementById(id);
    if (container) window.scrollBy(0, container.getBoundingClientRect().top);
    else window.scrollBy(0, 0);
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
      case "resume-container":
        moveToId(viewLocation);
        break;
      default:
        break;
    }
  }, [viewLocation]);

  const navigateTo = useNavigate();

  // TODO: Refactor to combine logic for both navbars
  return (
    <>
      <Fab mainButtonStyles={{backgroundColor: '#36f'}} icon={<FontAwesomeIcon icon={faPlus} />} event="click">
        <Action
          style={{ display: "block" }}
          text="About"
          onClick={() => {
            navigateTo("/about");
            setViewLocation("about-container");
          }}
        >
          <FontAwesomeIcon icon={faAddressCard} style={{ color: "white" }} />
          <div>
            <p style={{ fontSize: "0.5em" }}>About</p>
          </div>
        </Action>
        <Action
          style={{ display: "block" }}
          text="Resume"
          onClick={() => {
            navigateTo("/");
            setViewLocation("resume-container");
          }}
        >
          <FontAwesomeIcon icon={faFilePdf} style={{ color: "white" }} />
          <div>
            <p style={{ fontSize: "0.5em" }}>Resume</p>
          </div>
        </Action>
      </Fab>
      <Container className="navbar py-2 d-none d-sm-block col-sm-1 vh-100 position-fixed">
        <Row className="align-items-center h-100">
          <Col>
            <Col sm={12}>
              <FontAwesomeIcon
                icon={faAddressCard}
                style={{ color: "white" }}
              />
              <p
                className={`navItemText`}
                onClick={() => {
                  navigateTo("/about");
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
                  navigateTo("/about");
                  setViewLocation("projects-container");
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
                  navigateTo("/about");
                  setViewLocation("articles-container");
                }}
              >
                Presence
              </p>
            </Col>
            <Col sm={12}>
              <FontAwesomeIcon icon={faFilePdf} style={{ color: "white" }} />{" "}
              <p
                className="navItemText"
                onClick={() => {
                  navigateTo("/");
                  setViewLocation("resume-container");
                }}
              >
                Resume
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
          </Col>
        </Row>
      </Container>
    </>
  );
}
