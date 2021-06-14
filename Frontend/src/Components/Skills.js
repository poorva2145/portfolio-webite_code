import React from 'react';
import { useEffect, useState } from 'react';

const Skills = () => {
  const [skillsItems, setSkillsItems] = useState([]);

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      'mode': 'cors'
    }
    fetch('/api/skills', { headers })
      .then(response => response.json())
      .then(response => setSkillsItems(response.data));
  }, []);

  const skillsList = skillsItems.map(({ name, logo }, index) => {
    return (
      <div className="skill-grid-item" key={index}>
        <img src={logo} alt="skill-logo" />
        <p>{name}</p>
      </div>
    )
  })

  return (
    <div className="main-item" id="skills">
      <div className="main-section">
        <div className="content-heading">
          <p>SKILLS</p>
        </div>
        <div className="skill-content">
          {skillsList}
        </div>
      </div>
    </div>
  )
}

export default Skills;