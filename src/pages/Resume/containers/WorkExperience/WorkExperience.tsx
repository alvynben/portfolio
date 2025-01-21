import { Col } from "react-bootstrap";
import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExperience.css";

import { workExperienceCopy } from "./workExperienceCopy";
import WorkExperienceElement from "./components/WorkExperienceElement/WorkExperienceElement";

export default function WorkExperience() {
  return (
    <Col className="work-experience" sm={12}>
      <h1 className="mt-4">Work Experience</h1>
      <p style={{ color: "#f00" }}>
        <small>All my second homes.</small>
      </p>
      <VerticalTimeline>
        {workExperienceCopy.map((workExperienceElement) => (
          <WorkExperienceElement key={workExperienceElement.date} {...workExperienceElement} />
        ))}
      </VerticalTimeline>
    </Col>
  );
}
