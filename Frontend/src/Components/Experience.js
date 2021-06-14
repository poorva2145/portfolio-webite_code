import React from 'react';
import { useState, useEffect } from 'react';


const Experience = () => {
  const [experienceInfo, setExperienceInfo] = useState([]);

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      'mode': 'cors'
    }
    fetch('/api/experience', { headers })
      .then(response => response.json())
      .then(response => setExperienceInfo(response.data));
  }, []);

  const experienceList = experienceInfo.map(({ logo, name, role, description, ending_date, location, starting_date }, index) => {
    const featureDiv = description.map(({ description_item }, index) => {
      return (
        <li key={index}>{description_item}</li>
      )
    })

    return (
      <div className="experience-item" key={index}>
        <div className="experience-item-heading">
          <img src={logo} alt="company-logo" />
          <p>{name}</p>
        </div>
        <div className="experience-item-role">
          <p>{role}</p>
        </div>
        <div className="experience-item-info">
          <p>{starting_date} - {ending_date}  |  {location}</p>
        </div>
        <div className="experience-item-content">
          <ul>
            {featureDiv}
          </ul>
        </div>
      </div>
    )
  })

  return (
    <div className="main-item" id="experience">
      <div className="main-section">
        <div className="content-heading">
          <p>EXPERIENCE</p>
        </div>
        <div className="experience-content">
          {experienceList}
        </div>
      </div>
    </div>
  );
};

export default Experience;