import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Thumbnail from "./Thumbnail";

const content = [
  {
    link: "https://cde.nus.edu.sg/idp/student-alumni/student-life#attachment_5273",
    image:
      "https://cde.nus.edu.sg/idp/wp-content/uploads/sites/6/2021/06/Outreach-1024x683.jpg",
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
    <Container className="vh-100 my-2 articles-container">
      <Row className="vh-100">
        <Col sm={3} className="align-self-center">
          <h1 id="articlesTitle">Presence</h1>
          <p> A list of references to me online</p>
        </Col>
        <Col sm={9} className="align-self-center">
          <Container className="projects" fluid>
            <Row className="g-0 justify-content-around">
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
