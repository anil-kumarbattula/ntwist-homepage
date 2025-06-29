import React from 'react';
import Header from './components/Header/Header.jsx'; // Use .jsx
import HeroSection from './components/HeroSection/HeroSection.jsx';
import TrustedBySection from './components/TrustedBySection/TrustedBySection.jsx';
import WhatWeDeliverSection from './components/WhatWeDeliverSection/WhatWeDeliverSection.jsx';
import NumbersSpeakSection from './components/NumbersSpeakSection/NumbersSpeakSection.jsx';
import AIPoweredInsightSection from './components/AIPoweredInsightSection/AIPoweredInsightSection.jsx';
import IndustriesSection from './components/IndustriesSection/IndustriesSection.jsx';
import BusinessImpactSection from './components/BusinessImpactSection/BusinessImpactSection.jsx';
import CallToActionSection from './components/CallToActionSection/CallToActionSection.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <WhatWeDeliverSection />
        <NumbersSpeakSection />
        <AIPoweredInsightSection />
        <IndustriesSection />
        <BusinessImpactSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;