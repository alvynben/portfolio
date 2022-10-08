import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./SocialMediaBar.css";
import cvPDF from "assets/CV.pdf";



function SocialMediaBar() {
  const [mouseInside, setMouseInside] = useState(false);

  const SocialMediaText = (text: string) => (
    <p style={{fontSize: '12px', margin: 0, display: mouseInside ? 'block' : 'none'}}>{text}</p>
  )
  return (
    <div onMouseEnter={() => setMouseInside(true)} onMouseLeave={() => setMouseInside(false)} className="icon-bar">
      <div
        onClick={() => {
          window.open("https://linkedin.com/in/alvinbenabraham", "_blank");
        }}
        className="linkedin"
      >
        <FontAwesomeIcon icon={faLinkedin} />
        {SocialMediaText('Linkedin')}
      </div>
      <div
        onClick={() => {
          window.open("https://github.com/alvynben", "_blank");
        }}
        className="github"
      >
        <FontAwesomeIcon icon={faGithub} />
        {SocialMediaText('GitHub')}
      </div>
      <a
        style={{ textDecoration: "none", color: "#fff" }}
        href={cvPDF}
        target="_blank"
        rel="noreferrer"
      >
        <div className="resume">
          <FontAwesomeIcon icon={faFilePdf} />
          {SocialMediaText('Resume')}
        </div>
      </a>
    </div>
  );
}

export default SocialMediaBar;
