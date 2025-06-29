
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginSection from './components/LoginSection/LoginSection';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import WhatWeDeliverSection from './components/WhatWeDeliverSection/WhatWeDeliverSection';
import AIPoweredInsightSection from './components/AIPoweredInsightSection/AIPoweredInsightSection';
import TrustedBySection from './components/TrustedBySection/TrustedBySection';
import Footer from './components/Footer/Footer';

const HomePageContent = ({ onLogout }) => (
    <>
        <Header onLogout={onLogout} isLoggedIn={true} />
        <HeroSection />
        <WhatWeDeliverSection />
        <AIPoweredInsightSection />
        <TrustedBySection />
        <Footer />
    </>
);

function App() {
    // 1. STATE DEFINITION: This must be useState
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 2. INITIAL LOAD CHECK: This useEffect must be present and correctly structured
    useEffect(() => {
        const storedLoginStatus = localStorage.getItem('isLoggedIn');
        console.log('App.jsx useEffect - localStorage "isLoggedIn":', storedLoginStatus); // ADD THIS LOG
        if (storedLoginStatus === 'true') {
            setIsLoggedIn(true);
            console.log('App.jsx useEffect - Setting isLoggedIn state to TRUE'); // ADD THIS LOG
        } else {
            console.log('App.jsx useEffect - Setting isLoggedIn state to FALSE (or keeping false)'); // ADD THIS LOG
        }
    }, []); // Empty dependency array means runs once on mount

    // 3. CALLBACK FUNCTION: This function updates both state and localStorage
    const handleLoginSuccess = () => {
        console.log('App.jsx - handleLoginSuccess called!'); // ADD THIS LOG
        setIsLoggedIn(true); // <--- This updates the state
        localStorage.setItem('isLoggedIn', 'true'); // <--- This updates localStorage for persistence
        console.log('App.jsx - isLoggedIn state set to true, localStorage updated.'); // ADD THIS LOG
    };

    const handleLogout = () => {
        console.log('App.jsx - handleLogout called!'); // ADD THIS LOG
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        console.log('App.jsx - isLoggedIn state set to false, localStorage removed.'); // ADD THIS LOG
    };

    // 4. ROUTING LOGIC: Ensure these routes use the isLoggedIn state correctly
    // And ensure onLoginSuccess is passed to LoginSection
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={isLoggedIn ? <HomePageContent onLogout={handleLogout} /> : <Navigate to="/login" />}
                />

                <Route
                    path="/login"
                    element={isLoggedIn ? <Navigate to="/" /> : <LoginSection onLoginSuccess={handleLoginSuccess} />}
                />
            </Routes>
        </Router>
    );
}

export default App;