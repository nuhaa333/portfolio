import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Real-Time Chat App',
      description: 'Built using React and Firebase with private messaging, group chats, and file sharing.',
      image: '/chat.jpg',
      link: 'https://realchatap.netlify.app/',
    },
    {
      title: 'Zaiqa Food App',
      description: 'Full-stack app built with React and Node.js to browse, order, and reserve food.',
      image: '/zaiqa.jpg',
      link: 'https://zaiqa-app-iafe.onrender.com/',
    },
    {
      title: 'Portfolio Website',
      description: 'This responsive portfolio built using React to showcase my projects and skills.',
      image: '/portfolio.jpg',
      link: 'https://nuhakottai.site',
    },
    {
      title: 'Todo List App',
      description: 'Simple React app with local storage support to track daily tasks and goals.',
      image: '/todo.jpg',
      link: 'https://simpletasksap.netlify.app/',
    },
    {
      title: 'Calculator App',
      description: 'A calculator built using JavaScript during my FreeCodeCamp learning journey.',
      image: '/calculator.jpg',
      link: 'https://fcc-cal-nuha.netlify.app/',
    }
  ];

  const [showAll, setShowAll] = useState(false);

  // Show only first 3 if showAll is false
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {visibleProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-img">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>

      <div className="show-more-container">
        <button className="show-more-button" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}

export default Projects;

// import React from 'react';
// import './Projects.css';

// function Projects() {
//   const projects = [
//     {
//       title: 'Real-Time Chat App',
//       description: 'Built using React and Firebase with private messaging, group chats, and file sharing.',
//       image: '/chat.jpg', // Add this image to public folder
//       link: 'https://realchatap.netlify.app/',
//     },
//     {
//       title: 'Zaiqa Food App',
//       description: 'Full-stack app built with React and Node.js to browse, order, and reserve food.',
//       image: '/zaiqa.jpg', // Add this image to public folder
//       link: '#https://zaiqa-app-iafe.onrender.com/',
//     },
//     {
//       title: 'Portfolio Website',
//       description: 'This responsive portfolio built using React to showcase my projects and skills.',
//       image: '/portfolio.jpg', // Add this image to public folder
//       link: '#https://nuhakottai.site',
//     },
//     {
//       title: 'Todo List App',
//       description: 'Simple React app with local storage support to track daily tasks and goals.',
//       image: '/todo.jpg', // Add this image to public folder
//       link: '#https://simpletasksap.netlify.app/',
//     },
//     {
//     title: 'Calculator App',
//     description: 'A calculator built using JavaScript during my FreeCodeCamp learning journey.',
//     image: '/calculator.jpg',
//     link: 'https://fcc-cal-nuha.netlify.app/',
//   }
//   ];

//   return (
//     <div className="projects-section">
//       <h2 className="projects-title">My Projects</h2>
//       <div className="projects-grid">
//         {projects.map((project, index) => (
//           <div className="project-card" key={index}>
//             <div className="project-img">
//               <img src={project.image} alt={project.title} />
//             </div>
//             <div className="project-info">
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>
//               <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;

















// import React from 'react';
// import './Projects.css';

// function Projects() {
//   const projects = [
//     {
//       title: 'Real-Time Chat App',
//       description: 'Built using React and Firebase with private messaging, group chats, and file sharing.',
//       link: '#',
//     },
//     {
//       title: 'Zaiqa Food App',
//       description: 'Full-stack app built with React and Node.js to browse, order, and reserve food.',
//       link: '#',
//     },
//     {
//       title: 'Portfolio Website',
//       description: 'This responsive portfolio built using React to showcase my projects and skills.',
//       link: '#',
//     },
//     {
//       title: 'Todo List App',
//       description: 'Simple React app with local storage support to track daily tasks and goals.',
//       link: '#',
//     },
//   ];

//   return (
//     <div className="projects-container">
//       <h2>Projects</h2>
//       <div className="projects-list">
//         {projects.map((project, index) => (
//           <div key={index} className="project-card">
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;