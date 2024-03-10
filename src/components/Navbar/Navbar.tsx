import {
  faAddressCard,
  faFilePdf,
  faGamepad,
  faFolder,
  faNewspaper,
  faPlus,
  faToolbox,
  faBlog,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWindowWidth from "hooks/useWindowWidth";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import "./Navbar.css";

type NavItem = {
  navLoc: string;
  viewLoc: string;
  icon: IconDefinition;
  text: string;
  mobileText?: string;
  onlyForDesktop?: boolean;
  hidden?: boolean;
};

interface ActionButton {
  navLoc: string;
  viewLoc: string;
  icon: IconDefinition;
  text: string;
  mobileText?: string;
  onlyForDesktop?: boolean;
  hidden?: boolean;
}

interface NavButton {
  navLoc: string;
  viewLoc: string;
  icon: IconDefinition;
  text: string;
  mobileText?: string;
  onlyForDesktop?: boolean;
  hidden?: boolean;
}

const navItems: NavItem[] = [
  {
    navLoc: "about",
    viewLoc: "about-container",
    icon: faAddressCard,
    text: "About",
  },
  // {
  //   navLoc: "about",
  //   viewLoc: "projects-container",
  //   icon: faFolder,
  //   text: "Projects",
  // },
  // {
  //   navLoc: "about",
  //   viewLoc: "articles-container",
  //   icon: faNewspaper,
  //   text: "Presence",
  // },
  {
    navLoc: "/",
    viewLoc: "resume-container",
    icon: faFilePdf,
    text: "Resume",
  },
  {
    navLoc: "utilities",
    viewLoc: "utilities-container",
    icon: faToolbox,
    text: "Utilities",
    mobileText: "Utils",
    hidden: true,
  },
  {
    navLoc: "play",
    viewLoc: "play",
    icon: faGamepad,
    text: "Playground (WIP)",
    onlyForDesktop: true,
  },
  {
    navLoc: "blog",
    viewLoc: "blog",
    icon: faBlog,
    text: "Blog",
  }
];

export default function Navbar() {
  const [viewLocation, setViewLocation] = useState("about-container");
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  const moveToId = (id: any) => {
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
      case "projects-container":
        moveToId(viewLocation);
        break;
      case "articles-container":
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
  }, [viewLocation]);

  const navigateTo = useNavigate();

  const ActionButton: React.FC<ActionButton> = ({
    navLoc,
    viewLoc,
    icon,
    text,
    mobileText,
  }) => (
    <Action
      style={{ display: "block", background: "#fff" }}
      text={mobileText ?? text}
      key={mobileText ?? text}
      onClick={() => {
        navigateTo(navLoc);
        setViewLocation(viewLoc);
      }}
    >
      <FontAwesomeIcon icon={icon} style={{ color: "#000" }} />
      <div>
        <p style={{ fontSize: "0.5em", color: "#000" }}>{mobileText ?? text}</p>
      </div>
    </Action>
  );

  const NavButton: React.FC<NavButton> = ({ navLoc, viewLoc, icon, text }) => (
    <Col
      className="navItemText"
      key={text}
      onClick={() => {
        navigateTo(navLoc);
        setViewLocation(viewLoc);
      }}
      sm={12}
    >
      <FontAwesomeIcon icon={icon} style={{ color: "white" }} /> <p>{text}</p>
    </Col>
  );

  return (
    <>
      {isMobile && (
        <Fab
          mainButtonStyles={{ backgroundColor: "#36f" }}
          icon={<FontAwesomeIcon icon={faPlus} />}
          event="click"
        >
          {navItems.map((navItem) => (navItem.onlyForDesktop || navItem.hidden) ? null : ActionButton(navItem))}
        </Fab>
      )}
      <Container className="navbar py-2 d-none d-sm-block col-sm-1 vh-100 position-fixed">
        <Row className="align-items-center h-100">
          <Col>
          {navItems.map(navItem => navItem.hidden ? null : NavButton(navItem))}     
          </Col>
        </Row>
      </Container>
    </>
  );
}
