import React from 'react';
import './Services.css';
import { FaLaptopCode, FaServer, FaUserTie, FaVideo } from 'react-icons/fa';

function Services() {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, user-friendly, and modern web interfaces using React, HTML, CSS, and JavaScript.',
      icon: <FaLaptopCode />,
    },
    {
      title: 'Backend Development',
      description: 'Developing efficient, scalable server-side applications using Node.js, Express, and database management with MongoDB and SQL.',
      icon: <FaServer />,
    },
    {
      title: 'Freelancing Projects',
      description: 'Open to collaborating on web development projects, whether it’s full-stack, frontend, or backend-specific.',
      icon: <FaUserTie />,
    },
    {
      title: 'Video Editing Support',
      description: 'Offering basic video editing services using tools like Canva and video editors for project demos, social content, and presentations.',
      icon: <FaVideo />,
    },
  ];

  return (
    <section className='services-section' id='services'>
      <h2 className='services-heading'>What I Offer</h2>
      <div className='services-list'>
        {services.map((service, index) => (
          <div className='service-card' key={index}>
            <div className='service-icon'>{service.icon}</div>
            <div className='service-details'>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
;

