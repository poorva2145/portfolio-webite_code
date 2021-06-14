import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
  const [projectsInfo, setProjectsInfo] = useState([]);

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json',
      'mode': 'cors'
    }
    fetch('/api/projects', { headers })
      .then(response => response.json())
      .then(response => setProjectsInfo(response.data));
  }, []);

  const projectsList = projectsInfo.map(({ name, project_link, github_link, features_array }, index) => {
    const featureDiv = features_array.map(({ features_item }, index) => {
      return (
        <li key={index}>{features_item}</li>
      )
    })

    return (
      <div className="projects-grid-item" key={index}>
        <p className="project-name">{name}</p>
        <div className="project-links">
          <a style={{ display: project_link === "NIL" ? 'none' : 'block' }} target="_blank" rel="noreferrer" href={project_link}><FontAwesomeIcon className="icons" icon={faExternalLinkAlt} id="sidebar_btn" /></a>
          <a style={{ display: github_link === "NIL" ? 'none' : 'block' }} target="_blank" rel="noreferrer" href={github_link}><FontAwesomeIcon className="icons" icon={faGithub} id="sidebar_btn" /></a>
        </div>
        <ul>
          {featureDiv}
        </ul>
      </div>
    )
  })


  return (
    <div className="main-item" id="projects">
      <div className="main-section">
        <div className="content-heading">
          <p>PROJECTS</p>
        </div>
        <div className="projects-content">
          {projectsList}
        </div>
      </div>
    </div>
  )
}

export default Projects;