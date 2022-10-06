import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSpring, animated, config } from "react-spring";
import nusImg from "assets/nus-white.png";

function Number() {
  const [flip, set] = useState(false);
  const graduationDate = new Date("2024-05-01");
  const currentDate = new Date();
  const difference = graduationDate.getTime() - currentDate.getTime();
  const diffInMonths = Math.ceil(difference / (1000 * 3600 * 24 * 30));
  const { number } = useSpring({
    reset: false,
    reverse: false,
    from: { number: 48 },
    number: diffInMonths,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <p>
      {diffInMonths <= 0 ? (
        "Graduated!"
      ) : (
        <>
          Graduating in{" "}
          <animated.p style={{ display: "inline-block" }}>
            {number.to((n) => n.toFixed(0))}
          </animated.p>{" "}
          Months
        </>
      )}
    </p>
  );
}

export default function Education() {
  return (
    <Col className="mt-4" sm={12}>
      <h1 className="mt-4">Education</h1>
      <p style={{ color: "#f00" }}>
        <small>The crucible where I was forged. Now featuring Subway!</small>
      </p>

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
