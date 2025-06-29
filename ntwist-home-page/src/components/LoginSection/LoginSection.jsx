
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSection.css';

const LoginSection = ({ onLoginSuccess }) => { // <--- Ensure onLoginSuccess is received as a prop
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        setMessage('');
        setStatus('');

        console.log('LoginSection - Attempting login for:', username); // ADD THIS LOG

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            console.log('LoginSection - Backend response:', data); // ADD THIS LOG
            setMessage(data.message);
            setStatus(data.status);

            if (response.ok && data.status === 'success') {
                console.log('LoginSection - Login successful from backend response.'); // ADD THIS LOG

                // <--- CRITICAL CALL: This must happen on success!
                if (onLoginSuccess) {
                    onLoginSuccess();
                    console.log('LoginSection - onLoginSuccess called.'); // ADD THIS LOG
                }

                alert('Login Successful!');
                setUsername('');
                setPassword('');

                navigate('/'); // <--- CRITICAL: This must navigate after state update
                console.log('LoginSection - navigate("/") called.'); // ADD THIS LOG
            } else {
                console.error('LoginSection - Login failed:', data.message);
            }
        } catch (error) {
            console.error('LoginSection - Error during login request:', error);
            setMessage('Could not connect to the server. Please try again later.');
            setStatus('error');
        }
    };

    return (
        <section className="login-section">
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                {message && (
                    <p className={`login-message ${status}`}>
                        {message}
                    </p>
                )}
            </div>
        </section>
    );
};

export default LoginSection;