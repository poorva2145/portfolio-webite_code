import React from "react";
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChartLine, faAward, faUserAlt, faLaptop, faChartBar, faGraduationCap, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="checkbar">
        <label htmlFor="check">
          <FontAwesomeIcon className="icons" icon={faBars} id="sidebar_btn" />
        </label>
      </div>

      <Link to="home" spy={true} smooth={true}>
        <button>
          <FontAwesomeIcon className="icons" icon={faHome} />
          <span>Home</span>
        </button>
      </Link>

      <Link to="about" spy={true} smooth={true}>
        <button>
          <FontAwesomeIcon className="icons" icon={faUserAlt} />
          <span>About</span>
        </button>
      </Link>

      <Link to="experience" spy={true} smooth={true}>
        <button>
          <FontAwesomeIcon className="icons" icon={faChartLine} />
          <span>Experience</span>
        </button>
      </Link>

      <Link to="projects" spy={true} smooth={true}>
        <button>
          <FontAwesomeIcon className="icons" icon={faLaptop} />
          <span>Projects</span>
        </button>
      </Link>

      <Link to="skills" spy={true} smooth={true}>
        <button>
          <FontAwesomeIcon className="icons" icon={faChartBar} />
          <span>Skills</span>
        </button>
      </Link>

      <Link to="awards" spy={true} smooth={true}>
        <button>
          <FontAwesomeIcon className="icons" icon={faAward} />
          <span>Awards</span>
        </button>
      </Link>

      <Link to="education" spy={true} smooth={true}>
        <button>
          <FontAwesomeIcon className="icons" icon={faGraduationCap} />
          <span>Education</span>
        </button>
      </Link>

      <Link to="contact" spy={true} smooth={true}>
        <button>
          <FontAwesomeIcon className="icons" icon={faEnvelope} />
          <span>Contact</span>
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
