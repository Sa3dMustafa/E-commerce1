import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../assets/login.css';

function Login({ email: defaultEmail, pass: defaultPassword, onLogin }) {
    const [email, setEmail] = useState(defaultEmail || '');
    const [password, setPassword] = useState(defaultPassword || '');
    const [isInvalidCredentials, setIsInvalidCredentials] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulating login logic (Replace this with your actual authentication logic)
        if (email === 'saad@gmail.com' && password === '112233') {
            onLogin(); // Call the onLogin function passed as prop
            setIsInvalidCredentials(false); // Reset invalid credentials state
            // Redirect to homepage upon successful login
            navigate('/'); // Use navigate function to redirect to '/home' route
            console.log('Login successful!');
        } else {
            // Handle login failure
            setIsInvalidCredentials(true); // Set invalid credentials state
            console.log('Login failed. Invalid credentials.');
        }
    };

    return (
        <div className="login">
            <div className="logincontainer">
                <div className="heading">Sign In</div>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        placeholder="E-mail"
                        id="email"
                        name="email"
                        type="email"
                        className={`input ${isInvalidCredentials ? 'invalid' : ''}`}
                        required=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Password"
                        id="password"
                        name="password"
                        type="password"
                        className={`input ${isInvalidCredentials ? 'invalid' : ''}`}
                        required=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="forgot-password">
                        <a href="#">Forgot Password ?</a>
                    </span>
                    <input value="Sign In" type="submit" className="login-button" />
                </form>
                {isInvalidCredentials && <div className="error-message">Invalid email or password</div>}
            </div>
        </div>
    );
}

export default Login;
