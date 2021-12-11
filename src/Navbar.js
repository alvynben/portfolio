import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Container className="py-2">
      <Row>
          <Col xs={0} sm={8} />
        <Col>
          <Link to="/" className="navItem" style={{ textDecoration: "none" }}>
            Projects
          </Link>
        </Col>{" "}
        <Col>
          <Link
            to="/articles"
            className="navItem"
            style={{ textDecoration: "none" }}
          >
            Articles
          </Link>
        </Col>
        <Col>
          <Link
            to="/about"
            className="navItem"
            style={{ textDecoration: "none" }}
          >
            About
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
