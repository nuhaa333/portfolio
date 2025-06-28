import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">

      <div className="hamburger" onClick={toggleMenu}>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
      </div>

      <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
// import React from 'react';
// import './Navbar.css';

// function Navbar() {
//     return (
//         <nav className='navbar'>
//             <ul className='nav-links'>
//                 <li><a href="#home">Home</a></li>
//                 <li><a href="#about">About</a></li>
//                 <li><a href="#skills">Skills</a></li>
//                 <li><a href="#certificates">Certificates</a></li>
//                 <li><a href="#services">Services</a></li>
//                 <li><a href="#projects">Projects</a></li>
//                 <li><a href="#contact">Contact</a></li>
//             </ul>
//         </nav>
//     );
// }

// export default Navbar;