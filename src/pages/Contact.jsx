import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Let's connect! Reach out via any platform below:</p>
      <div className="contact-icons">
        <a href="https://github.com/nuhaa333" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/nuha-aaisha-k-32259b348" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="tel:+919791581738">
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </div>
    </div>
  );
}

export default Contact;