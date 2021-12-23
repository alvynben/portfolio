import { React, useState } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "./logo192.png";

export default function Thumbnail(props) {
  const [descriptionHidden, setDescriptionHidden] = useState(true);

  return (
    <>
      <Col
        className="project no-gutters mx-2 my-2"
        xs={5}
        sm={4}
        onMouseOver={() => {
          setDescriptionHidden(false);
        }}
        onMouseLeave={() => {
          setDescriptionHidden(true);
        }}
      >
        <a href={props.link} target="_blank" rel="noreferrer">
          <div className={`${!descriptionHidden ? "d-none" : ""}`}>
            <h4 className="project-title project-text">{props.title}</h4>
            <p className="project-category project-text">{props.category}</p>
          </div>
          <img
            src={props.image}
            alt="Project"
            className={`project-image ${
              !descriptionHidden ? "d-none" : ""
            }`}
          />
          <div
            className={`project-description px-2 ${
              descriptionHidden ? "d-none" : ""
            }`}
          >
            {props.description.map((content) => {
              return <p className="py-4">{content}</p>;
            })}
          </div>
        </a>
      </Col>
    </>
  );
}
