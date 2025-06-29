// src/components/AIPoweredInsightSection/AIPoweredInsightSection.jsx
import React from 'react';
import './AIPoweredInsightSection.css';

const AIPoweredInsightSection = () => {
  const phases = [
    {
      id: 1, 
      title: "Unified Data Access",
      description: "NTWIST works with your existing SCADA, MES, and historian systems to access operational data in real time - no overhaul required.",
      image: "/images/data-access.jpeg" // IMPORTANT: Make sure this image exists in public/images/
    },
    {
      id: 2,
      title: "AI That Thinks Like Your Team",
      description: "Purpose-built models continuously analyze throughput, energy use, and process variation, surfacing areas for improvement at a glance.",
      image: "/images/ai-chip.jpeg" // IMPORTANT: Make sure this image exists in public/images/
    },
    {
      id: 3,
      title: "Impact Delivered Where It Counts",
      description: "Insights are delivered exactly where your operators, planners, or leadership need them – enabling real-time adjustments and long-term strategic decisions.",
      image: "/images/data-access.jpeg" // IMPORTANT: Make sure this image exists in public/images/
    },
  ];

  return (
    <section className="ai-powered-insight-section">
      <div className="container">
        <h2>AI-Powered Insight. Delivered in Three Phases.</h2>
        <div className="phases-container"> {/* This container will stack the phase blocks */}
          {phases.map((phase, index) => (
            <div 
              key={phase.id} 
              // This class will alternate the image position (left/right)
              className={`phase-block ${index % 2 !== 0 ? 'phase-block--reverse' : ''}`}
            >
              <div className="phase-block__image-container">
                <img src={phase.image} alt={phase.title} />
              </div>
              <div className="phase-block__text-content">
                <h3>{phase.title}</h3>
                <p>{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIPoweredInsightSection;