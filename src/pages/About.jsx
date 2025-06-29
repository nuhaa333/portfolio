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
          src='\IMG_20250629_194333.JPG'
          alt="Nuha Aaisha"
          className="about-img"
        />
        <div className="about-content">
          <p>
            I am a passionate developer who enjoys building web applications that are simple, beautiful, and functional.
            I love exploring technologies like React, Node.js, Firebase, and I have experience with MongoDB, SQL, C++, and video editing.
            I’m a continuous learner always striving to improve my skills and create impactful digital solutions.
          </p>

          <a href="/resume.pdf" download="Nuha_Aaisha_Resume.pdf" className="download-resume">
               Download Resume
          </a>

        </div>
      </div>
    </div>
  );
}

export default About;


// import React from 'react';
// import './About.css';

// function About() {
//     return (
//         <div>
//             <div className='head'>
//                 <h1>About me</h1>
//             </div>
//             <div className='about'>
//                 <div className='curved-bg'>
//                     <div className='character'>
//                         <img src='/photo.jpg' alt='character' className='character-img' />
//                     </div>
//                 </div>
//                 <div className='abtp'>
//                     <p>
//                         I'm a curious creator and problem-solver with a love for clean code and smart design.
//                         I build digital experiences that not only work seamlessly but feel great to use.
//                         Whether it’s crafting engaging user interfaces or experimenting with new tech, I’m driven by the thrill of making something both beautiful and functional.
//                         I love transforming ideas into something meaningful.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default About;
