import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

const Skill: React.FC<{
  skillName: string;
  noOfStars?: number;
  noOfHalfStars?: number;
}> = ({ skillName, noOfStars = 0, noOfHalfStars = 0 }) => (
  <div className="d-flex justify-content-center mb-3">
    <p
      style={{
        display: "inline-block",
        marginRight: "1em",
        marginBottom: 0,
        maxWidth: "9em",
        width: "9em",
      }}
    >
      {skillName}
    </p>
    <div style={{display: 'flex', alignItems: 'center', width: '5em' }}>
      {[...Array(noOfStars)].map((num, idx) => {
        return <FontAwesomeIcon style={{display: 'inline-block'}} key={`full-${idx}`} color="#ff0" icon={faStar} />;
      })}
      {[...Array(noOfHalfStars)].map((num, idx) => {
        return <FontAwesomeIcon style={{display: 'inline-block'}} key={`half-${idx}`} color="#ff0" icon={faStarHalf} />;
      })}
    </div>
  </div>
);

export default function Skills() {
  return (
    <Col className="mt-4 mb-4" sm={12}>
      <h1>Skills</h1>
      <p style={{ color: "#f00" }}>
        <small>A craftsman is only as good as his tools. Here are mine.</small>
      </p>
      <Row style={{justifyContent: 'center'}}>
        <Col className="mt-4" sm={12} md={4}>
          <h2 className="mb-4" style={{whiteSpace: 'nowrap'}}>Front End</h2>
          <div>
            <Skill skillName="React" noOfStars={3} />
            <Skill skillName="TypeScript" noOfStars={3} />
            <Skill skillName="HTML" noOfStars={2} noOfHalfStars={1} />
            <Skill skillName="CSS / SCSS" noOfStars={2} noOfHalfStars={1} />
          </div>
        </Col>
        <Col className="mt-4" sm={12} md={4}>
          <h2 className="mb-4">Back End</h2>
          <div>
            <Skill skillName="Python" noOfStars={3} />
            <Skill skillName="NodeJS" noOfStars={3} />
            <Skill skillName="C++" noOfStars={2} />
          </div>
        </Col>
        <Col className="mt-4" sm={12} md={4}>
          <h2 className="mb-4">Others</h2>
          <div>
            <Skill skillName="Git" noOfStars={3} />
            <Skill skillName="Ubuntu" noOfStars={3} />
            <Skill skillName="Bash" noOfStars={3} />
            <Skill skillName="Figma" noOfStars={2} />
            <Skill skillName="Canva" noOfStars={2} />
          </div>
        </Col>
      </Row>
    </Col>
  );
}
