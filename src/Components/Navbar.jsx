import React, { useState } from 'react';
import img from '../assets/CRUD.png';
import { Link } from 'react-router-dom';
import Login from '../Page/Login';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Assuming user is initially logged in
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleLogout = () => {
        // Perform logout actions here (e.g., clearing local storage, redirecting, etc.)
        setIsLoggedIn(false);
        console.log('Logged out successfully!');
        // Redirect to login page after logout
        navigate('/login'); // Use navigate function to redirect to '/login' route
    };

    if (!isLoggedIn) {
        return <Login />;
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={img} className='width' alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            {isLoggedIn ? (
                                <li className="nav-item">
                                    <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
                                </li>
                            ) : null}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
