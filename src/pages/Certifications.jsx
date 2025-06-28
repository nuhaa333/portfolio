import React, { useState } from 'react';
import './Certifications.css';

function CertificateBox({ title, source, imageSrc }) {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="certificate-box">
      <p className="certificate-title">{title}</p>
      <strong className="certificate-source">{source}</strong>
      <button
        onClick={(e) => {
          e.preventDefault();
          setShowImage(!showImage);
        }}
        className="view-button"
      >
        Tap to View
      </button>
      {showImage && (
        <img
          src={imageSrc}
          alt={title}
          className="certificate-img"
        />
      )}
    </div>
  );
}

function Certifications() {
  const certs = [
    {
      title: 'Responsive Web Design',
      source: 'Certified from freeCodeCamp',
      image: '/res.jpg',
    },
    {
      title: 'Frontend Libraries',
      source: 'Certified from freeCodeCamp',
      image: '/frontend.jpg',
    },
    {
      title: 'JavaScript',
      source: 'Certified from freeCodeCamp',
      image: '/js.jpg',
    },
    {
      title: 'Python for CS',
      source: 'Certified by Harvard',
      image: '/harvard.jpg',
    },
    {
      title: 'DSA using Python',
      source: 'Certified by NPTEL',
      image: '/dsa.png',
    },
  ];

  return (
    <section className="certifications-section">
      <h2 className="certifications-heading">Certifications</h2>
      <div className="certifications-container">
        {certs.map((cert, index) => (
          <CertificateBox
            key={index}
            title={cert.title}
            source={cert.source}
            imageSrc={cert.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Certifications;