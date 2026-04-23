"use client";

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
        const isComponentBelowFirstThirdOfViewport = rect.top > 1 / 3 * window.innerHeight;
        const isComponentAboveLastThirdOfViewport = rect.top < 2 / 3 * window.innerHeight;
        const isComponentInMiddleOfViewport = isComponentBelowFirstThirdOfViewport && isComponentAboveLastThirdOfViewport;
        const isInView = isComponentWithinViewport && isComponentInMiddleOfViewport;
        setIsInView(isInView);
      }
    }, [scrollPosition]);
  
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        // `visible` bypasses the built-in IntersectionObserver-based show/hide,
        // which ships via react-intersection-observer@8 inside
        // react-vertical-timeline-component and no longer fires under React 18
        // hydration -- without this, every card stays stuck at
        // `visibility: hidden`. We keep the custom scroll-based box-shadow
        // animation below via our own useScrollPosition hook.
        visible
        contentStyle={{
          background: "var(--site-bg-elev)",
          color: "var(--site-ink)",
          border: "1px solid var(--site-rule)",
          borderRadius: "12px",
          boxShadow: `0 8px 24px -20px ${ isInView ? "var(--site-accent)" : "var(--site-ink-mute)"}`,
          transition: "box-shadow 1s",
        }}
        contentArrowStyle={{
          borderRight: "7px solid var(--site-accent)",
        }}
        date={date}
        iconStyle={{
          background: "var(--site-bg)",
          color: "var(--site-ink)",
          border: "1px solid var(--site-rule)",
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
            <Accordion.Header>{date.includes('Present') ? `What I'm doing` : `What I did`}</Accordion.Header>
            <Accordion.Body>
              {points.map((point, index) => <li key={index}>{point}</li>)}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </VerticalTimelineElement>
    )
  
  }