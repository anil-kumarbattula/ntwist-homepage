
import React from 'react';
import './IndustriesSection.css';

const IndustriesSection = () => {
  const industries = [
    {
      title: "Mining",
      description: "Unlock millions in hidden value by bridging the gap between mine plans and plant performance. Improve throughput, energy efficiency, and recovery with AI-powered visibility from pit to plant.",
      image: "/images/mining-truck.jpeg", // Placeholder image for mining
      link: "#" // Consider a proper route later
    },
    {
      title: "Manufacturing",
      description: "Maximize output, reduce downtime, and optimize every stage of production. NTWIST brings AI-powered clarity to planning, scheduling, and execution.",
      image: "/images/manufacturing-plant.jpeg", // Placeholder image for manufacturing
      link: "#"
    }
  ];

  return (
    <section className="industries-section">
      <div className="container">
        <h2>Industries We Serve</h2>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div className="industry-card" key={index}>
              <img src={industry.image} alt={industry.title} className="industry-image" />
              <div className="card-content">
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
                <button className="btn btn-outline">Explore Use Cases</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;