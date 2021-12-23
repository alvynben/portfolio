import React from "react";
import Thumbnail from "./Thumbnail";
import { Container, Row } from "react-bootstrap";
import "./App.css";

const content = [
  {
    link: "https://t.me/fridgetbot",
    image:
      "https://logos-world.net/wp-content/uploads/2021/03/Telegram-Logo.png",
    title: "Telegram Bot",
    category: "Python | Telegram",
  },
  {
      link: "https://voca.sg",
      image: "https://voca.sg/static/media/WebLandingPage.7b519502.png",
      title: "Voca SG",
      category: "ReactJS | Material",
  },
  {
      link: "https://app.interseed.co",
      image: "https://app.interseed.co/static/media/mockupresources.450791c2.png",
      title: "Interseed Co.",
      category: "ReactTSX | Bootstrap",
  }
];

export default function Projects() {
  return (
    <Container>
      <h1 id="projectsTitle">Projects</h1>
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
    </Container>
  );
}
