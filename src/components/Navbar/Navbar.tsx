"use client";

import {
  faAddressCard,
  faFilePdf,
  faGamepad,
  faPlus,
  faToolbox,
  faBlog,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWindowWidth from "hooks/useWindowWidth";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter, usePathname } from "next/navigation";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import "./Navbar.css";

interface ActionButton {
  navLoc: string;
  viewLoc: string;
  icon: IconDefinition;
  text: string;
  mobileText?: string;
  onlyForDesktop?: boolean;
  hidden?: boolean;
}

interface NavButtonProps {
  navLoc: string;
  viewLoc: string;
  icon: IconDefinition;
  text: string;
  mobileText?: string;
  onlyForDesktop?: boolean;
  hidden?: boolean;
}

const navItems: NavButtonProps[] = [
  {
    navLoc: "/about",
    viewLoc: "about-container",
    icon: faAddressCard,
    text: "About",
  },
  {
    navLoc: "/",
    viewLoc: "resume-container",
    icon: faFilePdf,
    text: "Resume",
  },
  {
    navLoc: "/utilities",
    viewLoc: "utilities-container",
    icon: faToolbox,
    text: "Utilities",
    mobileText: "Utils",
    hidden: true,
  },
  {
    navLoc: "/play",
    viewLoc: "play",
    icon: faGamepad,
    text: "Playground (WIP)",
    onlyForDesktop: true,
  },
  {
    navLoc: "/blog",
    viewLoc: "blog",
    icon: faBlog,
    text: "Blog",
    hidden: false,
  },
];

export default function Navbar() {
  const [viewLocation, setViewLocation] = useState("about-container");
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;
  const router = useRouter();
  const pathname = usePathname();

  const moveToId = (id: string) => {
    const container = document.getElementById(id);
    if (container) window.scrollBy(0, container.getBoundingClientRect().top);
    else window.scrollBy(0, 0);
  };

  useEffect(() => {
    switch (viewLocation) {
      case "play":
        break;
      case "blog":
        break;
      case "about-container":
        moveToId(viewLocation);
        break;
      case "resume-container":
        moveToId(viewLocation);
        break;
      case "utilities-container":
        moveToId(viewLocation);
        break;
      default:
        break;
    }
  }, [viewLocation, pathname]);

  const handleNavigate = (navLoc: string, viewLoc: string) => {
    router.push(navLoc);
    setViewLocation(viewLoc);
  };

  const ActionButton: React.FC<ActionButton> = ({
    navLoc,
    viewLoc,
    icon,
    text,
    mobileText,
  }) => (
    <Action
      style={{
        display: "block",
        background: "var(--site-bg-elev)",
        border: "1px solid var(--site-rule)",
      }}
      text={mobileText ?? text}
      key={mobileText ?? text}
      onClick={() => handleNavigate(navLoc, viewLoc)}
    >
      <FontAwesomeIcon icon={icon} style={{ color: "var(--site-ink)" }} />
      <div>
        <p style={{ fontSize: "0.5em", color: "var(--site-ink-soft)" }}>{mobileText ?? text}</p>
      </div>
    </Action>
  );

  const NavButton: React.FC<NavButtonProps> = ({
    navLoc,
    viewLoc,
    icon,
    text,
  }) => (
    <Col
      className="navItemText"
      key={text}
      onClick={() => handleNavigate(navLoc, viewLoc)}
      sm={12}
    >
      <FontAwesomeIcon icon={icon} style={{ color: "var(--site-ink-soft)" }} /> <p>{text}</p>
    </Col>
  );

  return (
    <>
      {isMobile && (
        <Fab
          mainButtonStyles={{ backgroundColor: "var(--site-accent)", color: "var(--site-bg)" }}
          icon={<FontAwesomeIcon icon={faPlus} />}
          event="click"
        >
          {navItems.map((navItem) =>
            navItem.onlyForDesktop || navItem.hidden
              ? null
              : ActionButton(navItem)
          )}
        </Fab>
      )}
      <Container className="navbar py-2 d-none d-sm-block col-sm-1 vh-100 position-fixed">
        <Row className="align-items-center h-100">
          <Col>
            {navItems.map((navItem) =>
              navItem.hidden ? null : NavButton(navItem)
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
