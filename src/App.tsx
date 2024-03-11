// Hooks
import useWindowWidth from "hooks/useWindowWidth";
import { useState } from "react";

// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// External Components
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Internal Components
import Navbar from "components/Navbar/Navbar";
import LandingPage from "pages/LandingPage/LandingPage";
import Playground from "pages/Playground/Playground";
import Resume from "pages/Resume/Resume";
import Blog from "pages/Blog/Blog";
import SocialMediaBar from "components/SocialMediaBar/SocialMediaBar";

function App() {
  const [proceedAnyway, setProceedAnyway] = useState(true);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 768;

  return (
    <BrowserRouter>
      {isMobile && !proceedAnyway ? (
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
          <p>We're still working on the mobile site</p>
          <p>Visit us on desktop instead!</p>
          <button
            style={{ color: "#d61a1f" }}
            onClick={() => {
              setProceedAnyway(true);
            }}
          >
            {" "}
            Click here if you'd like to see the site anyway!
          </button>
        </div>
      ) : (
        <Container className="App" fluid>
          <Row>
            <Col sm={1}>
              <Navbar />
            </Col>
            <Col sm={8} className="mx-auto">
              {!isMobile ? <SocialMediaBar /> : null}
              <Routes>
                
                <Route path="/" element={<Resume />} />
                <Route path="/play" element={<Playground />} />
                <Route path="/about" element={<LandingPage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:postSlug" element={<Blog />} />
                <Route path="*" element={<Navigate to="/" replace />} />
                
                
              </Routes>
            </Col>
          </Row>
        </Container>
      )}
    </BrowserRouter>
  );
}

export default App;
