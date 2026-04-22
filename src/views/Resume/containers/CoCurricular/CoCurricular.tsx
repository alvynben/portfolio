import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./CoCurricular.css";

function CoCurricular() {
  return (
    <Col className="mt-4 mb-4" sm={12}>
      <h1 className="mt-4">Extra Curricular</h1>
      <p style={{ color: "#f00" }}>
        <small>
          Apparently, there is more to life than just coding, cycling, and
          cooking. Huh, who knew?
        </small>
      </p>
      <Row className="mt-4">
        <Col sm={12} className="align-self-center">
          <Row className="g-4 justify-content-around align-items-center">
            <Col sm={12}>
              <Card style={{ background: "#000", color: "#fff" }}>
                <Card.Header style={{ textAlign: "left" }}>
                  <Card.Title>President, NUS Innovation and Design Programme Students' Club</Card.Title>
                  <Card.Subtitle>Dec 2021 - Present</Card.Subtitle>
                </Card.Header>
                <Card.Body style={{ textAlign: "left", borderTop: '3px solid #fff' }}>
                  <ul style={{marginBottom: 0}}>
                    <li>
                      Invented outreach opportunities for 3 NUS startups by
                      partnering with external NUS organisations
                    </li>
                    <li>
                      Led planning and execution of a self-initiated nationwide
                      inter-university ideathon sponsored by James Dyson
                      Foundation, Silicon Laboratories, and nSearch Global with
                      a prize pool of $6000
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12}>
              <Card style={{ background: "#000", color: "#fff" }}>
                <Card.Header style={{ textAlign: "left" }}>
                  <Card.Title>
                    President, ACJC (Anglo-Chinese JC) Debate and Oratorical
                    Society
                  </Card.Title>
                  <Card.Subtitle>Jun 2016 - Jun 2017</Card.Subtitle>
                </Card.Header>
                <Card.Body style={{ textAlign: "left", borderTop: '3px solid #fff' }}>
                  <ul style={{marginBottom: 0}}>
                    <li>
                      Planned and organized regional and international debating
                      championships with over 200 participants
                    </li>
                    <li>
                      Obtained awards such as TPJC Oratory Championship
                      Finalist, 2016 and Asian World Schools Debating
                      Championships Semi-Finalist, 2016
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
}

export default CoCurricular;
