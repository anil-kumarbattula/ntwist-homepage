
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            {/* Remember to place ntwist-logo.svg in public/images/ */}
            <img src="/images/footer.jpeg" alt="NTWIST Footer Logo" />
          </div>
          <div className="footer-links-grid">
            <div className="footer-column">
              <h3>Solutions</h3>
              <ul>
                <li><a href="#mining-solutions">Mining Solutions</a></li>
                <li><a href="#manufacturing-solutions">Manufacturing Solutions</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Industries</h3>
              <ul>
                <li><a href="#mining">Mining</a></li>
                <li><a href="#manufacturing">Manufacturing</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#one-pagers">One-Pagers</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#request-demo">Request a Demo</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Legal</h3>
              <ul>
                <li><a href="#privacy-policy">Privacy Policy</a></li>
                <li><a href="#sitemap">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 NTWIST. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;