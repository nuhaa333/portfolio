import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faPython,
  faReact,
  faNodeJs,
  faGit,
  faBootstrap,
  faJava,
  faGoogle // Corrected: This comes from brands
} from '@fortawesome/free-brands-svg-icons';

import {
  faCode,
  faDatabase,
  faVideo,
  faC,
  faFire,
  faCloud,
  faLightbulb,
  faComments,
  faClock,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

const skills = [
  { name: 'HTML', icon: faHtml5, color: '#e44d26' },
  { name: 'CSS', icon: faCss3Alt, color: '#264de4' },
  { name: 'JavaScript', icon: faJsSquare, color: '#f0db4f' },
  { name: 'Python', icon: faPython, color: '#3776AB' },
  { name: 'React', icon: faReact, color: '#61DBFB' },
  { name: 'Node.js', icon: faNodeJs, color: '#68A063' },
  { name: 'Express', icon: faCode, color: '#ffffff' },
  { name: 'Java', icon: faJava, color: '#f89820' },
  { name: 'Git', icon: faGit, color: '#F1502F' },
  { name: 'Bootstrap', icon: faBootstrap, color: '#563d7c' },
  { name: 'MongoDB', icon: faDatabase, color: '#4DB33D' },
  { name: 'SQL', icon: faDatabase, color: '#00758F' },
  { name: 'C++', icon: faC, color: '#00599C' },
  { name: 'Video Editing', icon: faVideo, color: '#a855f7' },
  { name: 'Firebase', icon: faFire, color: '#FFA611' },
  { name: 'Cloudinary', icon: faCloud, color: '#4285F4' },
  { name: 'Google OAuth', icon: faGoogle, color: '#DB4437' },

  // Soft Skills
  { name: 'Problem Solving', icon: faLightbulb, color: '#facc15' },
  { name: 'Team Collaboration', icon: faUsers, color: '#4ade80' },
  { name: 'Communication', icon: faComments, color: '#34d399' },
  { name: 'Time Management', icon: faClock, color: '#a78bfa' }
];

function Skills() {
  return (
    <div className="skills-section">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-slider">
        <div className="skills-track">
          {skills.concat(skills).map((skill, index) => (
            <div className="skill" key={index}>
              <FontAwesomeIcon icon={skill.icon} style={{ color: skill.color }} size="3x" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

