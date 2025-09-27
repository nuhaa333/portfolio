import React from 'react';
import './Timeline.css';

const timelineData = [
  { year: 'Post-12th Grade', description: 'Started learning programming: Python, Java, C++.' },
  { year: '3rd Semester (Current)', description: 'Focused on MERN stack (MongoDB, Express, React, Node.js) for 2 months.' },
  { year: '2.5 Weeks Ago', description: 'Improved video editing skills (self-taught + work at AspiraSys). Explored Canva for design.' },
  { year: 'AspiraSys (1-Month Internship)', description: 'Brushed up React and Node.js by building projects. Earned certification from AspiraSys.' },
];

function Timeline() {
  return (
    <div className="timeline">
      <h2>My Learning Journey</h2>
      <div className="timeline-curve">
        {timelineData.map((item, index) => (
          <div className={`timeline-milestone ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="timeline-circle"></div>
            <div className="timeline-label">
              <h3>{item.year}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
