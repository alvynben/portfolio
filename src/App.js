import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Projects from "./Projects";
import Articles from "./Articles";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
          <Link to="/" className="navItem">
            Projects
          </Link>
          <Link to="/articles" className="navItem">
            Articles
          </Link>
          <Link to="/about" className="navItem">
            About
          </Link>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
