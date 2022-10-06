import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./SocialMediaBar.css";
import cvPDF from 'assets/CV.pdf';

function SocialMediaBar() {
  return (
    <div className="icon-bar">
      <div onClick={() => {
          window.open("https://linkedin.com/in/alvinbenabraham", "_blank");
        }} className="linkedin">
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
      <div onClick={() => {
          window.open("https://github.com/alvynben", "_blank");
        }} className="github">
        <FontAwesomeIcon icon={faGithub} />
      </div>
      <div className="resume">
      <a style={{textDecoration: 'none', color: '#fff'}} href={cvPDF} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFilePdf} />
        </a>
      </div>
    </div>
  );
}

export default SocialMediaBar;
