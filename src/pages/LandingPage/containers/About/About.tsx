import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import alvin01 from "assets/alvin01.jpg"
import './About.css'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function About(): JSX.Element {
  return (
    <Container className="py-4 about-container" id="about-container" fluid>
      <Row className="h-100">
        <Col sm={12} className="align-self-center">
          <h1 id="aboutTitle">About</h1>
        </Col>
        <Col sm={12} className="align-self-start">
          <blockquote className="blockquote text-center">
            <p>
              Kid, I've flown from one side of this galaxy to the other. There's
              no mystical energy field that controls my destiny. It's all a lot
              of simple tricks and nonsense.{" "}
            </p>
            <p className="blockquote-footer">
              Han Solo in <cite title="Source Title">A New Hope</cite>
            </p>
          </blockquote>
        </Col>
        <Col sm={12}>
          <Row className="align-items-center justify-content-center">
            <Col sm={6} className="blaster-container align-self-center">
              <div className="blaster1" />
              <div className="blaster2" />
              <img
                src={alvin01}
                className="smuggler-pic w-100 img-rounded"
                alt="Alvin Ben Abraham"
              />
              <p className="smuggler-pic-text">
                <em>A real picture of me, circa 2021 </em>
              </p>
            </Col>
            <Col sm={6} className="align-self-center">
              <p>
                <em>
                  My name's Alvin Ben! I love coding, cycling and cinema-ing.
                </em>
              </p>
              <p>
                I am passionate about bettering the quality of user interfaces -
                creating an internet that is user first.
              </p>

              <p>
                If you want to engage your users, and create more value for them
                - give me a call.
              </p>
              <a href="https://t.me/alvynbeno" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTelegram as IconProp} color="#3366ff" size="3x" />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
