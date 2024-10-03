// Header.js
import React from 'react';
import './Header.css';
import NavBar from "../NavBar/NavBar"; // CSS for header component

const Header = () => {
    return (
        <header className="header">
            <NavBar />
            <div className="header-content">
                <h1>Welcome to Our Website</h1>
                <p>Your success starts here</p>
            </div>
        </header>
    );
};

export default Header;
