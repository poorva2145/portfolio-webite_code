import React from 'react';
import { useState, useEffect } from 'react';

const Awards = () => {
  const [awardsInfo, setAwardsInfo] = useState([]);

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      'mode': 'cors'
    }
    fetch('/api/awards', { headers })
      .then(response => response.json())
      .then(response => setAwardsInfo(response.data));
  }, []);

  const awardsList = awardsInfo.map(({ description }, index) => {
    return (
      <li key={index}>
        {description}
      </li>
    )
  })

  return (
    <div className="main-item" id="awards">
      <div className="main-section">
        <div className="content-heading">
          <p>AWARDS</p>
        </div>
        <div className="content-section">
          <div className="awards-content">
            <ul>
              {awardsList}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;