import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Articles from "./Articles";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Container className="App" fluid>
        <Navbar />
      <Routes>
        <Route exact path="/" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
