import React from 'react';
import { useState, useEffect } from 'react';


const Education = () => {
  const [educationInfo, setEducationInfo] = useState([]);

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      'mode': 'cors'
    }
    fetch('/api/education', { headers })
      .then(response => response.json())
      .then(response => setEducationInfo(response.data));
  }, []);

  const educationList = educationInfo.map(({ branch, cgpa, degree, ending_date, location, organization, starting_date }, index) => {
    return (
      <div className="education-item" key={index}>
        <h3>{organization}</h3>
        <p>{location}</p>
        <ul>
          <li>{degree} in {branch}</li>
          <li>Duration: {starting_date} to {ending_date}</li>
          <li>CGPA: {cgpa}</li>
        </ul>
      </div>
    )
  })

  return (
    <div className="main-item" id="education">
      <div className="main-section">
        <div className="content-heading">
          <p>EDUCATION</p>
        </div>
        <div className="content-section">
          <div className="education-content">
            {educationList}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education;