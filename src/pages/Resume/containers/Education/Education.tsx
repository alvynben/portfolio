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
    <div>
      {diffInMonths <= 0 ? (
        <p>Graduated!</p>
      ) : (
        <>
          <p style={{ display: "inline-block", margin: 0 }}>Graduating in</p>{" "}
          <animated.p style={{ display: "inline-block", margin: 0 }}>
            {number.to((n) => n.toFixed(0))}
          </animated.p>{" "}
          <p style={{ display: "inline-block" }}>Months (May 2024)</p>
        </>
      )}
    </div>
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
          <img src={nusImg} alt="NUS Logo" />
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
