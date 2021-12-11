import React from "react";
import Thumbnail from "./Thumbnail";
import { Container, Row } from "react-bootstrap";
import "./App.css";

const content = [
  {
    link: "https://t.me/fridgetbot",
    image:
      "https://cdn5.telesco.pe/file/YQuoodTuhi62WI4sgIhouKh6lWmnnTs8WqDv2P13qmbl4w-GkTYeeTJJAYpIZvW3s57LBywzrzmn5SnFqFIIgn_iyuiDdqc5a2ckV8-s0jS5K70uj3lNr4KWL_YqFN7vPoo7-pP1_6dQFjJY03SVeUQrqZ6et6UywSwknN0l8tQTAwKyI-izhXKcymaaxhBjd0ydRlsaxe_i2OqZhdLB7KpHddT4ygULENsKpCe2B3H83yApiCXlNYsfM_l7SsWz6YGoRCZJC07g8zw5qNln10sI5MrYrpfEP6g8EmBv2D4gCukBi41oz3oBW4UiFQh0pvj9I9tWfLX44i2lrgQQrQ.jpg",
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
      <h1>Projects</h1>
      <Container className="projects" fluid>
        <Row className="g-0">
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
