import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "./logo192.png";

export default function Thumbnail(props) {
  return (
    <Col className="project" xs={12} sm={3}>
      <a href={props.link} target="_blank" rel="noreferrer">
        <div>
        <h4 className="project-title project-text">{props.title}</h4>
        <p className="project-category project-text">{props.category}</p>
        </div>
        <div className="project-image">
          <img src={props.image} alt="Project" />
        </div>
      </a>
    </Col>
  );
}
