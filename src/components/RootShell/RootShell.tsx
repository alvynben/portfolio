"use client";

import { useState, type ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Navbar from "components/Navbar/Navbar";
import SocialMediaBar from "components/SocialMediaBar/SocialMediaBar";
import useWindowWidth from "hooks/useWindowWidth";

interface RootShellProps {
  children: ReactNode;
}

export default function RootShell({ children }: RootShellProps) {
  const [proceedAnyway, setProceedAnyway] = useState(true);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  if (isMobile && !proceedAnyway) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#000",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <p>Oops!</p>
        <p>We&apos;re still working on the mobile site</p>
        <p>Visit us on desktop instead!</p>
        <button
          style={{ color: "#d61a1f" }}
          onClick={() => {
            setProceedAnyway(true);
          }}
        >
          {" "}
          Click here if you&apos;d like to see the site anyway!
        </button>
      </div>
    );
  }

  return (
    <Container className="App" fluid>
      <Row>
        <Col sm={1}>
          <Navbar />
        </Col>
        <Col sm={8} className="mx-auto">
          {!isMobile ? <SocialMediaBar /> : null}
          {children}
        </Col>
      </Row>
    </Container>
  );
}
