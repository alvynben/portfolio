import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
