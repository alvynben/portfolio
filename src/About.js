import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import alvin01 from "./alvin01.jpg";

export default function About() {
  return (
    <Container className="py-4 about-container" id="about-container" fluid>
      <Row className="h-100">
        <Col sm={12} className="align-self-center">
          <h1 id="aboutTitle">About</h1>
        </Col>
        <Col sm={12} className="align-self-start">
          <blockquote class="blockquote text-center">
            <p>
              Kid, I've flown from one side of this galaxy to the other. There's
              no mystical energy field that controls my destiny. It's all a lot
              of simple tricks and nonsense.{" "}
            </p>
            <p class="blockquote-footer">
              Han Solo in <cite title="Source Title">A New Hope</cite>
            </p>
          </blockquote>
        </Col>
        <Col sm={12}>
          <Row className="align-items-center">
            <Col sm={6} className="align-self-center">
              <div className="blaster1" />
              <div className="blaster2" />
              <img src={alvin01} className="smuggler-pic w-100 img-rounded" alt="Alvin" />
              <p className="smuggler-pic-text">
                <em>A real picture of a NUS student, circa 2021 </em>
              </p>
            </Col>
            <Col sm={6} className="align-self-center">
              <p>
                <em>
                  Call him what you want - scoundrel, nerf-herder. Just don't
                  call him scruffy lookin'.
                </em>
              </p>
              <p>
                Alvin Ben Abraham was born in 1999. Ever since then, he's been
                the main source of profit for the movie industry.
              </p>

              <p>
                When he's not watching movies, he's coding and hacking together
                new and inventive things to make life a little easier for the people he cares about.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
