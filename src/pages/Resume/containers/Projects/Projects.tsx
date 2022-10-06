import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "react-vertical-timeline-component/style.min.css";
import Thumbnail from "components/Thumbnail/Thumbnail";
import useWindowWidth from "hooks/useWindowWidth";

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
  {
    link: "https://github.com/alvynben/ninja-way",
    image:
      "https://www.ninjavan.co/cover.png",
    title: "Ninja Way",
    category: "Dart | Flutter",
    description: [
      "Created mobile app using Flutter (Dart) during 12-hour hackathon",
      "Implemented cloud architecture using Google Cloud Functions, Firestore, and API gateway",
    ],
  },
  {
    link: "https://ay2122s1-cs2113t-w12-4.github.io/tp/",
    image:
      "https://ay2122s1-cs2113t-w12-4.github.io/tp/umlDiagrams/Ui.png",
    title: "Fridget",
    category: "Java | Gradle | GitHub Actions",
    description: [
      "Developed a CLI app with Java, with user/developer guide in less than 5 weeks",
      "Used Gradle as a build tool, with Github Workflows for continuous integration",
    ],
  },
];

export default function Projects() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;
  
  return (
    <Col className="mt-4 mb-4" sm={12}>
      <h1 className="mt-4">Projects</h1>
      <p style={{color: "#f00"}}><small>When I'm not cycling or cooking, this is how I spend my time.</small></p>
      <Row>
      <Col sm={12} className="align-self-center">
          <small style={{color: "#fff"}}> {`[${isMobile ? 'Click on' :'Scroll over'} them to learn more!]`}</small>

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
    </Col>
  );
}
