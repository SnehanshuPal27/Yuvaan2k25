import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

function Navbar({ refs }) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const handleLinkClick = () => {
        setIsOpen(false); // Close the menu when a link is clicked
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false); // Close the menu if click is outside
          }
        };
    
        // Add event listener for clicks outside
        document.addEventListener('mousedown', handleClickOutside);
    
        // Cleanup the event listener when the component unmounts
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <a href="/">
                        <img src="/logo.png" alt="Logo" />
                    </a>
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
                            to="/eventIndex"
                            style={{
                                cursor: 'pointer',
                            }}
                        >
                            Events
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
                </ul>
            </div>
        </nav>


        {/* Mobile devices */}
        <nav className='mobile-navbar'>
            <div className="mobile-navbar-container">
                <div className="logo">
                        <a href="/">
                            <img src="/logo.png" alt="Logo" />
                        </a>
                </div>
                
                <button onClick={handleToggle} className='hamburger-btn'>
                <img
                    src={isOpen ? '/close.png' : '/menu.png'}
                    alt={isOpen ? 'Close menu' : 'Open menu'}
                    className="menu-icon"
                />
                </button>     
            </div>
        </nav>

        <div  className={`nav-menu-container ${isOpen ? 'open' : ''}`}>
            <Link to="/" onClick={handleLinkClick} style={{ cursor: 'pointer' }}>Home</Link>
            <Link to="/teamIndex" onClick={handleLinkClick} style={{ cursor: 'pointer' }}>Teams</Link>
            <Link to="/eventIndex" onClick={handleLinkClick} style={{ cursor: 'pointer' }}>Events</Link>
            <Link to="/sponsors" onClick={handleLinkClick} style={{ cursor: 'pointer' }}>Sponsors</Link>
        </div>

        </>
    );
}

export default Navbar;