// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>From Data to Decision, Seamlessly.</h1>
        <p>Unlock hidden value by turning raw industrial data into instant and confident action without changing your tech stack.</p>
        <button className="btn primary-btn">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;