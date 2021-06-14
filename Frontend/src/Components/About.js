import React from "react";
import { useState, useEffect } from 'react';

const About = () => {
  const [aboutInfo, setAboutInfo] = useState("");

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      'mode': 'cors'
    }
    fetch('/api/about', { headers })
      .then(response => response.json())
      .then(response => setAboutInfo(response.data[0].description));
  }, []);

  return (
    <div className="main-item" id="about">
      <div className="main-section">
        <div className="content-heading">
          <p>ABOUT</p>
        </div>
        <div className="content-section">
          <div className="about-content">
            <p>
              {aboutInfo}
            </p>
          </div>
        </div>
      </div>



    </div >
  );
};

export default About;
