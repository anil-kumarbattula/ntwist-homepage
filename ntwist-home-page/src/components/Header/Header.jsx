// src/components/Header/Header.jsx
import React, { useState } from 'react';
import './Header.css'; // Component-specific CSS

const Header = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile navigation

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      {/* Cookie Consent Bar */}
      {showCookieConsent && (
        <div className="cookie-consent-bar">
          <div className="container">
            This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your Browse experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our Privacy Policy. If you decline, your information won't be tracked when you visit this website. A single cookie will be used in your browser to remember your preference not to be tracked.
            <div className="cookie-buttons">
              <button onClick={() => setShowCookieConsent(false)} className="btn cookie-btn-accept">Accept</button>
              <button onClick={() => setShowCookieConsent(false)} className="btn cookie-btn-decline">Decline</button>
            </div>
          </div>
        </div>
      )}

      <div className="main-header-content container">
        <div className="logo">
          <a href="/">
            {/* Remember to place ntwist-logo.svg in public/images/ */}
            <img src="/images/logo.jpeg" alt="NTWIST Logo" />
          </a>
        </div>
        
        <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li className="has-dropdown">
              <a href="#solutions">Solutions</a>
              {/* Dropdown content would go here, consider separate component for complexity */}
            </li>
            <li className="has-dropdown">
              <a href="#industries">Industries</a>
            </li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;