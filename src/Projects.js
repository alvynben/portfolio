import React from "react";
import Thumbnail from "./Thumbnail";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";

const content = [
  {
    link: "https://t.me/fridgetbot",
    image:
      "https://logos-world.net/wp-content/uploads/2021/03/Telegram-Logo.png",
    title: "Telegram Bot",
    category: "Python | Telegram",
    description: [
      "Hosted a Python Telegram Bot via Heroku",
      "Linked bot to SQL Database to store data",
    ],
  },
  {
    link: "https://voca.sg",
    image: "https://voca.sg/static/media/WebLandingPage.7b519502.png",
    title: "Voca SG",
    category: "ReactJS | Material",
    description: [
      "Hosted a Python Telegram Bot via Heroku",
      "Linked bot to SQL Database to store data",
    ],
  },
  {
    link: "https://app.interseed.co",
    image: "https://app.interseed.co/static/media/mockupresources.450791c2.png",
    title: "Interseed Co.",
    category: "ReactTSX | Bootstrap",
    description: [
      "Hosted a Python Telegram Bot via Heroku",
      "Linked bot to SQL Database to store data",
    ],
  },
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
  }
];

export default function Projects() {
  return (
    <Container className="vh-100 my-2 projects-container">
      <Row className="vh-100">
        <Col sm={3} className="align-self-center">
          <h1 id="projectsTitle">Projects</h1>
          <p><em> A few of the fun projects I've worked on. </em></p>
          <p>
            <small>
              {" "}
              Unless otherwise stated, I'm either the sole developer or sole
              frontend developer.{" "}
            </small>
          </p>
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
              {/* <Thumbnail
            link="https://t.me/fridgetbot"
            image="http://twitter-image-url.jpg"
            title="Twitter Newsfeed"
            category="Mobile App"
          />

          <Thumbnail
            link="/airbnb"
            image="http://airbnb-image-url.jpg>"
            title="Airbnb Experiences"
            category="Website"
          />

          <Thumbnail
            link="/photoshop"
            image="http://photoshop-image-url.jpg"
            title="Photoshop Redesign"
            category="Desktop App"
          />
          <Thumbnail
            link="/airbnb"
            image="http://airbnb-image-url.jpg>"
            title="Airbnb Experiences"
            category="Website"
          />

          <Thumbnail
            link="/photoshop"
            image="http://photoshop-image-url.jpg"
            title="Photoshop Redesign"
            category="Desktop App"
          /> */}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
