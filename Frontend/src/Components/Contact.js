import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
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
    <div className="main-item" id="contact">
      <div className="main-section">
        <div className="content-heading">
          <p>CONTACT</p>
        </div>
        <div className="contact-content">
          <div className="contact-icons">
            <a target="_blank" rel="noreferrer" href={linkedinLink}><FontAwesomeIcon className="icons" icon={faLinkedin} id="sidebar_btn" /></a>
            <a target="_blank" rel="noreferrer" href={githubLink}><FontAwesomeIcon className="icons" icon={faGithub} id="sidebar_btn" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;