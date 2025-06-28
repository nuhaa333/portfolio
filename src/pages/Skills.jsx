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
} from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faVideo, faC } from '@fortawesome/free-solid-svg-icons';

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
];

function Skills() {
  return (
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
  );
}

export default Skills;





// import React from 'react';
// import './Skills.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faHtml5,
//   faCss3Alt,
//   faJsSquare,
//   faPython,
//   faReact,
//   faNodeJs,
//   faGit,
//   faBootstrap,
//   faJava,
// } from '@fortawesome/free-brands-svg-icons';

// import { faCode } from '@fortawesome/free-solid-svg-icons';

// const skills = [
//   { name: 'HTML', icon: faHtml5, color: '#e44d26' },
//   { name: 'CSS', icon: faCss3Alt, color: '#264de4' },
//   { name: 'JavaScript', icon: faJsSquare, color: '#f0db4f' },
//   { name: 'Python', icon: faPython, color: '#3776AB' },
//   { name: 'React', icon: faReact, color: '#61DBFB' },
//   { name: 'Node.js', icon: faNodeJs, color: '#68A063' },
//   { name: 'Express', icon: faCode, color: '#ffffff' },
//   { name: 'Java', icon: faJava, color: '#f89820' },
//   { name: 'Git', icon: faGit, color: '#F1502F' },
//   { name: 'DSA', icon: faCode, color: '#9b59b6' },
//   { name: 'Bootstrap', icon: faBootstrap, color: '#563d7c' },
// ];

// function Skills() {
//   return (
//     <div className='skills-container'>
//       {skills.map((skill, index) => (
//         <div className='skill' key={index}>
//           <FontAwesomeIcon icon={skill.icon} style={{ color: skill.color }} size='3x' />
//           <p>{skill.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Skills;
