import React from "react";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Thumbnail from "components/Thumbnail/Thumbnail";
import { Col, Container, Row } from "react-bootstrap";
import "./Projects.css";

const content = [
  {
    link: "https://t.me/fridgetbot",
    image:
      "https://enews.hamariweb.com/wp-content/uploads/2021/09/Telegram.png",
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
      "Worked on ReactJS frontend and Python/NodeJS backend",
      "Currently working on improving backend scraper!",
    ],
  },
  {
    link: "https://app.interseed.co",
    image: "https://app.interseed.co/static/media/mockupresources.450791c2.png",
    title: "Interseed Co.",
    category: "ReactTSX | Bootstrap",
    description: [
      "Sole Frontend Developer for Interseed Co.",
      "Created animated landing page that increased overall user engagement by 25%",
    ],
  },
  {
    link: "https://www.ideate2021.com/home",
    image:
      "https://cde.nus.edu.sg/idp/wp-content/uploads/sites/6/2021/06/Outreach-1024x683.jpg",
    title: "IDEATE 2021",
    category: "Events | Marketing",
    description: [
      "Created brand new nationwide ideathon with more than 200 participants",
      "Gained >$5000 in sponsorships without prior recognition",
    ],
  },
];

export default function Projects() {
  return (
    <Container
      className="my-2 projects-container"
      id="projects-container"
      fluid
    >
      <Row className="h-100">
        <Col sm={3} className="align-self-center">
          <h1 id="projectsTitle">Projects</h1>
          <p>
            <em> A few of the fun projects I've worked on. </em>
          </p>
          <p>
            <small>
              {" "}
              Unless otherwise stated, I'm either the sole developer or sole
              frontend developer.{" "}
            </small>
          </p>

          <p>
            <small> See more at my: </small>
          </p>
          <a
            href="https://www.linkedin.com/in/alvinbenabraham"
            target="_blank"
            rel="noreferrer"
            className="mx-2"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" color="#3366ff" />
          </a>

          <a
            href="https://www.github.com/alvynben"
            target="_blank"
            rel="noreferrer"
            className="mx-2"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" color="#ffffff" />
          </a>
        </Col>

        <Col sm={9} className="align-self-center">
          <small style={{color: "#fff"}}> [Scroll over them to learn more!]</small>

          <Container className="projects" fluid>
            <Row className="g-0 justify-content-around align-items-center">
              {content.map((data) => {
                return (
                  <Thumbnail
                    key={data.title}
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
