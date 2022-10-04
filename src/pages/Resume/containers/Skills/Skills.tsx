import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import './Skills.css';

const Skill: React.FC<{
    skillName: string;
    noOfStars?: number;
    noOfHalfStars?: number;
}> = ({skillName, noOfStars = 0, noOfHalfStars = 0}) => (
  <div className="d-flex justify-content-center">
    <p
      style={{
        display: "inline-block",
        marginRight: "1em",
      }}
    >
      {skillName}
    </p>
    <div style={{ textAlign: "left" }}>
        {[...Array(noOfStars)].map(num => {
            return <FontAwesomeIcon color="#ff0" icon={faStar}></FontAwesomeIcon>
        })}
        {[...Array(noOfHalfStars)].map(num => {
            return <FontAwesomeIcon color="#ff0" icon={faStarHalf}></FontAwesomeIcon>
        })}
    </div>
  </div>
);

export default function Skills() {
  
  return (
    <Col className="mt-4 mb-4" sm={12}>
      <h1>Skills</h1>
      <p style={{color: "#f00"}}><small>A craftsman is only as good as his tools. Here are mine.</small></p>
      <Row>
        <Col className="mt-4" sm={4}>
          <h2 className="mb-4">Front End</h2>
          <div>
            <Skill skillName="React" noOfStars={3} />
            <Skill skillName="TypeScript" noOfStars={3} />
            <Skill skillName="HTML" noOfStars={2} noOfHalfStars={1} />
            <Skill skillName="CSS / SCSS" noOfStars={2} noOfHalfStars={1} />
          </div>
        </Col>
        <Col className="mt-4" sm={4}>
          <h2 className="mb-4">Back End</h2>
          <div>
            <Skill skillName="Python" noOfStars={3} />
            <Skill skillName="NodeJS" noOfStars={3} />
            <Skill skillName="C++" noOfStars={2} />
          </div>
        </Col>
        <Col className="mt-4" sm={4}>
          <h2 className="mb-4">Others</h2>
          <div>
            <Skill skillName="Git" noOfStars={3} />
            <Skill skillName="Figma" noOfStars={2} />
            <Skill skillName="Canva" noOfStars={2} />
          </div>
        </Col>
      </Row>
    </Col>
  );
}
