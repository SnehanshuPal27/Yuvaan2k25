import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  HomeFilled,
  TeamOutlined,
  DollarOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingUn } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null); // Ref for hamburger button

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
    window.scrollTo(0, 0); // set to the top of the page when a link is clicked
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the menu or hamburger button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close the menu if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling when menu is open
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when menu is closed
    }
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <a href="/">
              <img src="/logo.png" alt="Logo" />
            </a>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">
                <HomeFilled className="icon-style" />
                {/* Add text element */}
                <span className="nav-text">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/teamIndex" className="nav-link">
                <TeamOutlined className="icon-style" />
                <span className="nav-text">Teams</span>
              </Link>
            </li>
            <li>
              <Link to="/eventIndex" className="nav-link">
                <CalendarOutlined className="icon-style" />
                <span className="nav-text">Events</span>
              </Link>
            </li>
            <li>
              <Link to="/sponsors" className="nav-link">
                <DollarOutlined className="icon-style" />
                <span className="nav-text">Sponsors</span>
              </Link>
            </li>
            <li>
              <a
                href="https://iiitgmun.github.io/MUN-Website-2025/"
                target="_blank"
                className="nav-link"
              >
                <FontAwesomeIcon icon={faBuildingUn} className="icon-style" />
                <span className="nav-text">IIITG MUN</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="mobile-navbar">
        <div className="mobile-navbar-container">
          <div className="logo">
            <a href="/">
              <img src="/logo.png" alt="Logo" />
            </a>
          </div>
          <button
            ref={hamburgerRef}
            onClick={handleToggle}
            className="hamburger-btn"
          >
            <img
              src={isOpen ? "/close.png" : "/menu.png"}
              alt={isOpen ? "Close menu" : "Open menu"}
              className="menu-icon"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`nav-menu-container ${isOpen ? "open" : ""}`}
      >
        <Link to="/" onClick={handleLinkClick}>
          Home
        </Link>
        <Link to="/teamIndex" onClick={handleLinkClick}>
          Teams
        </Link>
        <Link to="/eventIndex" onClick={handleLinkClick}>
          Events
        </Link>
        <Link to="/sponsors" onClick={handleLinkClick}>
          Sponsors
        </Link>
        <a href="https://iiitgmun.github.io/MUN-Website-2025/">IIITG-MUN</a>
      </div>
    </>
  );
}

export default Navbar;
