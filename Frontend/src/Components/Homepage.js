import React from "react";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Homepage = () => {
  const [linkedinLink, setLinkedinLink] = useState("");
  const [githubLink, setGithubLink] = useState("");

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      'mode': 'cors'
    }
    fetch('/api/contact', { headers })
      .then(response => response.json())
      .then(response => {
        const obj = response.data[0];
        setGithubLink(obj.github);
        setLinkedinLink(obj.linkedin);
      });
  }, []);

  return (
    <div className="homepage" id="home">
      <div className="homepage-links">
        <div className="contact-icons">
          <a target="_blank" rel="noreferrer" href={linkedinLink}><FontAwesomeIcon className="icons" icon={faLinkedin} id="sidebar_btn" /></a>
          <a target="_blank" rel="noreferrer" href={githubLink}><FontAwesomeIcon className="icons" icon={faGithub} id="sidebar_btn" /></a>
        </div>
      </div>
      <div className="homepage-content">
        <p className="hi">Hi, my name is</p>
        <p className="name">Poorva Mago.</p>
        <p className="intro">I'm a competitive programmer.</p>
      </div>
    </div>
  );
};

export default Homepage;
