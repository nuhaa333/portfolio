import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate EmailJS here to send the message
    console.log(formData);
    setSubmitted(true);
    // Reset the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Feel free to send me a message!</p>
      {submitted && <p className="success-message">Thank you! I will get back to you soon.</p>}
      
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import './Contact.css';

// function Contact() {
//   return (
//     <div className="contact-container">
//       <h2>Contact Me</h2>
//       <p>Let's connect! Reach out via any platform below:</p>
//       <div className="contact-icons">
//         <a href="https://github.com/nuhaa333" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faGithub} />
//         </a>
//         <a href="https://www.linkedin.com/in/nuha-aaisha-k-32259b348" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faLinkedin} />
//         </a>
//         <a href="tel:+919791581738">
//           <FontAwesomeIcon icon={faPhone} />
//         </a>
//       </div>
//     </div>
//   );
// }

// export default Contact;