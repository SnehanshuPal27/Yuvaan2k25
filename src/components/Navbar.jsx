import React, { useState, useEffect } from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

function Navbar({ refs }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (ref, offset = 80) => {
        if (ref && ref.current) {
            // Get the current position of the element
            const elementPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
            
            // Subtract the offset (default 80px for navbar height)
            const offsetPosition = elementPosition - offset;

            // Smooth scroll to the calculated position
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    // Optional: Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            
            if (
                isOpen && 
                navLinks && 
                !navLinks.contains(event.target) && 
                hamburger && 
                !hamburger.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <a href="/">
                        <img src="/logo.png" alt="Logo" />
                    </a>
                </div>
                <div className="hamburger" onClick={handleToggle}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`nav-links ${isOpen ? 'show' : ''}`}>

                    <li>
                        <Link
                            to="/"
                            style={{
                                cursor: 'pointer',
                            }}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/teamIndex"
                            style={{
                                cursor: 'pointer',
                            }}
                        >
                            Teams
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/sponsors"
                            style={{
                                cursor: 'pointer',
                            }}
                        >
                            Sponsors
                        </Link>
                    </li>
                    {/*<li>*/}
                    {/*    <a onClick={() => scrollToSection(refs.sponsors)}*/}
                    {/*    style={{*/}
                    {/*        cursor: 'pointer',*/}
                    {/*     }}*/}
                    {/*    >Sponsors</a>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;