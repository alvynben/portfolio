import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [proceedAnyway, setProceedAnyway] = useState(false);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <BrowserRouter>
      {isMobile & !proceedAnyway ? (
        <div style={{display: "flex", flexDirection: "column",justifyContent: "center", alignItems: "center", background: "#fcd612", height: "100vh", textAlign: "center"}}>
          <p>Oops!</p>
          <p>We're still working on the mobile site</p>
          <p>Visit us on desktop instead!</p>
          <button style={{color: "#d61a1f"}} onClick={() => {
            setProceedAnyway(true);
          }}> Click here if you'd like to see the site anyway!</button>
        </div>
      ) : (
        <Container className="App" fluid>
          <Row>
            <Col sm={1}>
              <Navbar />
            </Col>
            <Col sm={8} className="mx-auto">
              <Routes>
                <Route exact path="/" element={<LandingPage />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      )}
    </BrowserRouter>
  );
}

export default App;
