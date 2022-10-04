import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSpring, animated, config } from "react-spring";
import nusImg from "assets/nus-white.png";

function Number() {
  const [flip, set] = useState(false)
  const { number } = useSpring({
    reset: false,
    reverse: false,
    from: { number: 0 },
    number: 4.59,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <p>
      CAP:{" "}
      <animated.p style={{ display: "inline-block" }}>
        {number.to((n) => n.toFixed(2))}
      </animated.p>{" "}
      / 5.00 (First Class)
    </p>
  );
}

export default function Education() {
  return (
    <Col className="mt-4" sm={12}>
      <h1 className="mt-4">Education</h1>
      <p style={{color: "#f00"}}><small>The crucible where I was forged. Now featuring Subway!</small></p>

      <Row className="align-items-center justify-content-center">
        <Col sm={3}>
          <img style={{ marginTop: "-2rem" }} src={nusImg} alt="NUS Logo" />
        </Col>
        <Col sm={6} className="h-100">
          <p>Bachelor of Engineering (Computer Engineering) Honours</p>
          <p>Second Major in Innovation and Design</p>
          <Number />
        </Col>
      </Row>
    </Col>
  );
}
