// src/components/WhatWeDeliverSection/WhatWeDeliverSection.jsx
import React from 'react';
import './WhatWeDeliverSection.css';

const WhatWeDeliverSection = () => {
  const features = [
    {
      title: "Maximize Throughput",
      description: "Continuously identify and correct bottlenecks with AI-powered insights that elevate site-wide production performance.",
      icon: <span class="material-symbols-outlined">arrow_upward</span>
    },
    {
      title: "Cut Energy Waste",
      description: "Optimize power usage in real time with intelligent process recommendations - lowering both cost and emissions.",
      icon: <span class="material-symbols-outlined">content_cut</span>
    },
    {
      title: "Accelerate Decision-Making",
      description: "Surface critical patterns instantly across operations, giving your teams clarity and confidence without needing to switch platforms.",
      icon: <span class="material-symbols-outlined">schedule</span>
    },
    {
      title: "Deploy Fast, Scale Smarter",
      description: "Get results in weeks, not quarters. NTWIST integrates seamlessly with your current systems - no disruption, no heavy lift.",
      icon: <span class="material-symbols-outlined">fast_forward</span>
    },
  ];

  return (
    <section className="what-we-deliver-section">
      <div className="container">
        <h2>What We Deliver</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              {/* If using images: <img src={feature.iconPath} alt={feature.title} className="feature-icon-img" /> */}
              <div className="feature-icon">{feature.icon}</div> 
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDeliverSection;