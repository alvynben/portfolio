import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useScrollPosition from "hooks/useScrollPosition";
import { useEffect, useRef, useState } from "react";
import { Accordion } from "react-bootstrap";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { WorkExperienceElementProps } from "../../workExperienceCopy";

export default function WorkExperienceElement(props: WorkExperienceElementProps): JSX.Element {

    const {
      date,
      icon,
      title,
      company,
      location,
      skills,
      points,
    } = props;
  
    const elementRef = useRef<HTMLDivElement>(null);
    const scrollPosition = useScrollPosition();
    const [isInView, setIsInView] = useState(false);
  
    useEffect(() => {
      if (elementRef.current) {
        const rect = elementRef.current?.getBoundingClientRect();
        const isComponentAboveBottomOfViewport = rect.top < window.innerHeight;
        const isComponentBelowTopOfViewport = rect.top > 0;
        const isComponentWithinViewport = isComponentAboveBottomOfViewport && isComponentBelowTopOfViewport;
        const isComponentBelowHalfOfViewport = rect.top > 1 / 2 * window.innerHeight;
        const isInView = isComponentWithinViewport && isComponentBelowHalfOfViewport;
        setIsInView(isInView);
      }
    }, [scrollPosition]);
  
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "rgb(0, 0, 0)",
          color: "#fff",
          boxShadow: `0 3px 0 ${ isInView ? "#36f" : "#fff"}`,
          transition: "box-shadow 1s",
        }}
        contentArrowStyle={{
          borderRight: "7px solid  #3366ff",
        }}
        date={date}
        iconStyle={{
          background: "rgb(255, 255, 255)",
          color: "#000",
          textAlign: "center",
        }}
        icon={
          <FontAwesomeIcon
            style={{ width: "24px" }}
            icon={icon as IconProp}
          />
        }
      >
        <h4 ref={elementRef} className="vertical-timeline-element-title">
          {title}
        </h4>
        <h4 className="vertical-timeline-element-subtitle">
          {company}, {location}
        </h4>
        {skills && <p>{skills.join(" | ")}</p>}
        <Accordion className="mt-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What I'm doing</Accordion.Header>
            <Accordion.Body>
              {points.map((point, index) => <li key={index}>{point}</li>)}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </VerticalTimelineElement>
    )
  
  }