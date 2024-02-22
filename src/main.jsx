import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Style/index.css';

import App from './App';
import Login from './Page/Login';
import Navbar from './Components/Navbar';

const Root = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    // Function to handle successful login
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    // Function to handle successful logout
    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <React.StrictMode>
            <BrowserRouter>
                {isLoggedIn && <Navbar handleLogout={handleLogout} />} {/* Render Navbar only if isLoggedIn is true */}
                {/* Conditionally render App or Login component based on login status */}
                {isLoggedIn ? <App /> : <Login onLogin={handleLogin} />}
            </BrowserRouter>
        </React.StrictMode>
    );
};

createRoot(document.getElementById('root')).render(<Root />);
