import React from "react";
import {  Container, Row } from "react-bootstrap";
import TimezoneConverter from "./components/TimezoneConverter/TimezoneConverter";

function Utilities() {
  return (
    <Container
      className="py-4 utilities-container"
      id="utilities-container"
      fluid
    >
      <Row className="align-self-center">
        <h1>Utilities</h1>
        <TimezoneConverter />
      </Row>
    </Container>
  );
}

export default Utilities;
