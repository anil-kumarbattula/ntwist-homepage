
import React from 'react';
import './BusinessImpactSection.css';

const BusinessImpactSection = () => {
  const caseStudies = [
    {
      title: "Ore Management Transformed",
      description: "One client improved ore tracking and reconciliation across mine and mill operations - uncovering operational blind spots and unlocking untapped throughput opportunities.",
      result: "Result: Improved stockpile alignment from 68% to 93%, enabling faster corrective action and increased recovery potential.",
      link: "#" // Link to full case study
    },
    {
      title: "AI Optimization at Scale",
      description: "In a high-throughput facility, NTWIST deployed prescriptive AI that cut power consumption and stabilized production without system overhauls.",
      result: "Result: 22% reduction in power usage and improved process reliability.",
      link: "#"
    },
  ];

  return (
    <section className="business-impact-section">
      <div className="container">
        <h2>Proven Business Impact</h2>
        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <div className="case-study-card" key={index}>
              <h3>{study.title}</h3>
              <p className="description">{study.description}</p>
              <p className="result">{study.result}</p>
              <a href={study.link} className="read-more-link">Read Full Case Study →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactSection;