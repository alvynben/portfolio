import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Thumbnail from "components/Thumbnail/Thumbnail";
import ideatePic from "assets/ideate.png"
import "./Articles.css";

const content = [
  {
    link: "https://cde.nus.edu.sg/idp/student-alumni/student-life#attachment_5273",
    image:
      "https://cde.nus.edu.sg/idp/wp-content/uploads/sites/6/2021/06/Outreach-1024x683.jpg",
    title: "iDP Club",
    category: "Student Club Leadership",
    description: [
      "Organised events as Head of Outreach",
      "Currently leading the club as President",
    ],
  },
  {
    link: "https://www.ideate2021.com/about",
    image: ideatePic,
    title: "iDP Club",
    category: "Outreach Head",
    description: [
      "Hosted a Python Telegram Bot via Heroku",
      "Linked bot to SQL Database to store data",
    ],
  },
];
export default function Articles() {
  return (
    <Container className="my-2 articles-container" id="articles-container" fluid>
      <Row className="h-100">
        <Col sm={3} className="align-self-center">
          <h1 id="articlesTitle">Presence</h1>
          <p> A list of references to me online</p>
        </Col>
        <Col sm={9} className="align-self-center">
          <Container className="projects" fluid>
            <Row className="g-0 justify-content-around align-items-center">
              {content.map((data) => {
                return (
                  <Thumbnail
                    link={data.link}
                    image={data.image}
                    title={data.title}
                    category={data.category}
                    description={data.description}
                  />
                );
              })}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
