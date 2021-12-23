import React from "react";
import { Container, Row } from "react-bootstrap";
import Thumbnail from "./Thumbnail";

const content = [
  {
    link: "https://cde.nus.edu.sg/idp/student-alumni/student-life#attachment_5273",
    image:
      "https://cde.nus.edu.sg/idp/wp-content/uploads/sites/6/2021/06/Outreach-1024x683.jpg",
    title: "iDP Club",
    category: "Outreach Head",
  },
];
export default function Articles() {
  return (
    <Container>
      <h1 id="articlesTitle">Articles</h1>
      <Container className="projects" fluid>
        <Row className="g-0 justify-content-around">
          {content.map((data) => {
            return (
              <Thumbnail
                link={data.link}
                image={data.image}
                title={data.title}
                category={data.category}
              />
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}
