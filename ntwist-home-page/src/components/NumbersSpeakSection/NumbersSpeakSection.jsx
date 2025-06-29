
import React from 'react';
import './NumbersSpeakSection.css';

const NumbersSpeakSection = () => {
  const stats = [
    { value: "$17MM", label: "Delivered in Reoccurring Revenue" },
    { value: "100%", label: "Customer Retention" },
    { value: "90 Days", label: "Time to Deployment" },
  ];

  return (
    <section className="numbers-speak-section">
      <div className="container">
        <h2>The numbers speak for themselves</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersSpeakSection;