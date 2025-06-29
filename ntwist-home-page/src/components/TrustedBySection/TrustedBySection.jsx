
import React from 'react';
import './TrustedBySection.css';

const TrustedBySection = () => {
  const logos = [
    { src: '/images/blue.jpeg', alt: "Canadian Natural Logo" },
    { src: '/images/oceana-gold.jpeg', alt: "Oceana Gold Logo" },
    { src: '/images/aura.jpeg', alt: "Aura 360 Mining Logo" },
    { src: '/images/vale.jpeg', alt: "Vale Logo" },
    { src: '/images/sherritt.jpeg', alt: "Sherritt Logo" },
    { src: '/images/gold-fields.jpeg', alt: "Gold Fields Logo" },
  ];

  return (
    <section className="trusted-by-section">
      <div className="container">
        <h2>Trusted by Operations That Don't Settle</h2>
        <div className="logo-grid">
          {logos.map((logo, index) => (
            <div className="logo-item" key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;