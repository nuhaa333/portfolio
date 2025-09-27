import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-section">
      <div className="background-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
        <div className="shape shape5"></div>
      </div>

      <div className="about">
        <h2>About Me</h2>
        <img
          src='\img.jpg'
          alt="Nuha Aaisha"
          className="about-img"
        />
        <div className="about-content">
          <p>
            I am a passionate developer who enjoys building web applications that are simple, beautiful, and functional.
            I love exploring technologies like React, Node.js, Firebase, and I have experience with MongoDB, SQL, C++, and video editing.
            I’m a continuous learner always striving to improve my skills and create impactful digital solutions.
          </p>

          <a href="/resume.pdf" download="nuha_aaisha.pdf" className="download-resume">
               Download Resume
          </a>

        </div>
      </div>
    </div>
  );
}

export default About;


