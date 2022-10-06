import React, { RefObject, useEffect, useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import { Col, Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import {
  faGraduationCap,
  faIdBadge,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExperience.css";

export default function WorkExperience() {
  const [activeKey, setActiveKey] = useState<RefObject<HTMLDivElement> | null>(
    null
  );
  const tikTokRef = useRef<HTMLDivElement>(null);
  const interseedRef = useRef<HTMLDivElement>(null);
  const teachingRef = useRef<HTMLDivElement>(null);
  const robomRef = useRef<HTMLDivElement>(null);
  const armyRef = useRef<HTMLDivElement>(null);
  const { inViewport: tikTokInViewport } = useInViewport(tikTokRef);
  const { inViewport: interseedInViewport } = useInViewport(interseedRef);
  const { inViewport: teachingInViewport } = useInViewport(teachingRef);
  const { inViewport: robomInViewport } = useInViewport(robomRef);
  const { inViewport: armyInViewport } = useInViewport(armyRef);

  useEffect(() => {
    const allKeys = [
      [tikTokInViewport, tikTokRef],
      [interseedInViewport, interseedRef],
      [teachingInViewport, teachingRef],
      [robomInViewport, robomRef],
      [armyInViewport, armyRef],
    ];
    const activeKeys: RefObject<HTMLDivElement>[] = [];
    for (const viewCheck of allKeys) {
      if (viewCheck[0])
        activeKeys.push(viewCheck[1] as RefObject<HTMLDivElement>);
    }
    var middle: RefObject<HTMLDivElement> =
      activeKeys[Math.floor(activeKeys.length / 2)];
    setActiveKey(middle);
  }, [
    tikTokInViewport,
    interseedInViewport,
    teachingInViewport,
    robomInViewport,
    armyInViewport,
  ]);

  return (
    <Col className="work-experience" sm={12}>
      <h1 className="mt-4">Work Experience</h1>
      <p style={{ color: "#f00" }}>
        <small>All my second homes.</small>
      </p>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(0, 0, 0)",
            color: "#fff",
            boxShadow: `0 3px 0 ${tikTokRef === activeKey ? "#36f" : "#fff"}`,
            transition: "box-shadow 1s",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #3366ff",
          }}
          date="May 2022 - Sep 2022"
          iconStyle={{
            background: "rgb(255, 255, 255)",
            color: "#000",
            textAlign: "center",
          }}
          icon={
            <FontAwesomeIcon
              style={{ width: "24px" }}
              icon={faTiktok as IconProp}
            />
          }
        >
          <h4 className="vertical-timeline-element-title">
            Software Engineer Intern
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            TikTok, Singapore
          </h4>
          <p>React | Typescript | Python</p>
          <Accordion ref={tikTokRef} className="mt-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>What I did</Accordion.Header>
              <Accordion.Body>
                <li>
                  Planned and constructed efficient and highly reusable
                  front-end systems driving complex web applications for
                  e-commerce products,{" "}
                  <strong>
                    increasing unique views by 110% and retention rate by 24%.
                  </strong>
                </li>
                <li>
                  Collaborated with product design, product management and
                  software engineering teams to deliver more than{" "}
                  <strong>
                    3 large-scale features across more than 5 countries over 3
                    months.
                  </strong>
                </li>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(0, 0, 0)",
            color: "#fff",
            boxShadow: `0 3px 0 ${
              interseedRef === activeKey ? "#36f" : "#fff"
            }`,
            transition: "box-shadow 1s",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #3366ff",
          }}
          date="Jul 2021 - Jul 2022"
          iconStyle={{ background: "rgb(255, 255, 255)", color: "#000" }}
          icon={
            <FontAwesomeIcon
              style={{ width: "24px" }}
              icon={faLeaf as IconProp}
            />
          }
        >
          <h4 className="vertical-timeline-element-title">
            Full Stack Developer
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            Interseed Co, Singapore
          </h4>
          <p>React | Typescript | NodeJS</p>
          <Accordion ref={interseedRef} className="mt-4">
            <Accordion.Item eventKey="1">
              <Accordion.Header>What I did</Accordion.Header>
              <Accordion.Body>
                <li>
                  Accomplished mobile responsiveness for Interseed's Social
                  Networking application (app.interseed.co) to{" "}
                  <strong>
                    increase percentage of mobile users from 20% to 74%
                  </strong>{" "}
                  of current user base.
                </li>
                <li>
                  Collaborated with development team to{" "}
                  <strong>
                    design features for initial launch over 5 weeks
                  </strong>
                  , and collected user feedback to perform bug fixes with React,
                  Typescript, and Bootstrap.
                </li>
                <li>
                  <strong>Created new REST API endpoint</strong> in NodeJS
                  server with ExpressJS, by interfacing with MongoDB database to
                  group more than 200 website users by location for display on a
                  dynamic map, created using React Leaflet.
                </li>
                <li>
                  <strong>Championed product management methodologies</strong>{" "}
                  (user personas, brainstorming) to develop product features to
                  specifically assist main customer base over 2-week timeline
                </li>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(0, 0, 0)",
            color: "#fff",
            boxShadow: `0 3px 0 ${teachingRef === activeKey ? "#36f" : "#fff"}`,
            transition: "box-shadow 1s",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #3366ff",
          }}
          date="Aug 2021 - Dec 2021"
          iconStyle={{ background: "rgb(255, 255, 255)", color: "#000" }}
          icon={
            <FontAwesomeIcon
              style={{ width: "24px" }}
              icon={faGraduationCap as IconProp}
            />
          }
        >
          <h4 className="vertical-timeline-element-title">
            Teaching Assistant
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            National University of Singapore, Singapore
          </h4>
          <p>Python | OOP</p>
          <Accordion ref={teachingRef} className="mt-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>What I did</Accordion.Header>
              <Accordion.Body>
                <li>
                  <strong>Taught</strong> and graded a batch of 22 students
                  about fundamental programming concepts leveraging{" "}
                  <strong>Python and Object-Oriented Programming.</strong>
                </li>
                <li>
                  <strong>Received 4.3/5</strong> and above on all metrics from
                  student feedback.
                </li>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(0, 0, 0)",
            color: "#fff",
            boxShadow: `0 3px 0 ${robomRef === activeKey ? "#36f" : "#fff"}`,
            transition: "box-shadow 1s",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #3366ff",
          }}
          date="Aug 2020 - Aug 2021"
          iconStyle={{ background: "rgb(255, 255, 255)", color: "#000" }}
          icon={
            <FontAwesomeIcon
              style={{ width: "24px" }}
              icon={faGraduationCap as IconProp}
            />
          }
        >
          <h4 className="vertical-timeline-element-title">
            Software Vice President
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            NUS RoboMasters, Singapore
          </h4>
          <p>Python | C++ | ROS</p>
          <Accordion ref={robomRef} className="mt-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>What I did</Accordion.Header>
              <Accordion.Body>
                <li>
                  Researched different development kits and cameras such as the
                  NVIDIA NX & Raspberry Pi Cam to{" "}
                  <strong>
                    design an embedded system for target detection and aiming.
                  </strong>
                </li>
                <li>
                  Spearheaded computer vision team to{" "}
                  <strong>
                    implement Yolov5 on PyTorch and Yolov4 on TensorRT along
                    with Robotic Operating System (ROS) 2
                  </strong>{" "}
                  to do target detection of a custom dataset.
                </li>
                <li>
                  <strong>Integrated CSI camera with Jetson Xavier NX</strong>{" "}
                  with Ubuntu 18.04 to fix pre-existing robot hardware.
                </li>
                <li>
                  <strong>Created a custom PyTorch model</strong> from
                  self-annotated database to track and aim at targets with less
                  than 20ms latency.
                </li>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(0, 0, 0)",
            color: "#fff",
            boxShadow: `0 3px 0 ${armyRef === activeKey ? "#36f" : "#fff"}`,
            transition: "box-shadow 1s",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  #3366ff",
          }}
          date="Feb 2018 - Jun 2020"
          iconStyle={{ background: "rgb(255, 255, 255)", color: "#000" }}
          icon={<FontAwesomeIcon size="2x" icon={faIdBadge as IconProp} />}
        >
          <h4 className="vertical-timeline-element-title">
            2nd Sergeant (Infantry Specialist)
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            Singapore Armed Forces, Singapore
          </h4>
          <Accordion ref={armyRef} className="mt-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>What I did</Accordion.Header>
              <Accordion.Body>
                <li>
                  Devised and organized a database system to monitor and update
                  lesson plans from multiple units,{" "}
                  <strong>cutting down delivery time</strong>
                  for an updated hardcopy lesson plan{" "}
                  <strong>from 3 days to less than a day.</strong>
                </li>
                <li>
                  Picked to be emcee for unit anniversary event, and
                  <strong>
                    self-developed script to present a show for more than 500
                    pax.
                  </strong>
                </li>
                <li>
                  Awarded <strong>Best Commander</strong> during service from
                  unit commander and awarded{" "}
                  <strong>Outstanding conduct</strong> upon release from
                  service.
                </li>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Col>
  );
}
