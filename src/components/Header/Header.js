import React from 'react';
import './Header.css';
import NavBar from "../NavBar/NavBar";
import TypeRent from '../TypeRent/TypeRent';

const Header = () => {
    return (
        <header className="header">
            <NavBar />
            <div className="header-content">
                <h1>Welcome to Our Website</h1>
                <p>Your success starts here</p>
            </div>
            <TypeRent />
        </header>
    );
};

export default Header;
