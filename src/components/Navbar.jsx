import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <a href="/"><img src="/logo.png" alt="Logo" /></a>
                </div>
                <div className="hamburger" onClick={handleToggle}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
                    <li><a href="#home" onClick={handleToggle}>Home</a></li>
                    <li><a href="#about" onClick={handleToggle}>About</a></li>
                    <li><a href="#services" onClick={handleToggle}>Services</a></li>
                    <li><a href="#contact" onClick={handleToggle}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
