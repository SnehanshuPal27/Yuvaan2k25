import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="modern-footer">
            <div className="footer-container">
                <div className="footer-section about">
                    <h3>About Us</h3>
                    <p>
                        We are a vibrant team of creators, committed to delivering excellence and 
                        making a positive impact. Join us on our journey!
                    </p>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><FaEnvelope className="icon" /> info@yourorganization.com</li>
                        <li>1234 Main Street, City, Country</li>
                        <li>+123-456-7890</li>
                    </ul>
                </div>
                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <FaFacebook className="icon" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <FaTwitter className="icon" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <FaInstagram className="icon" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <FaLinkedin className="icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Your Organization. Designed with ❤️ by Your Team.</p>
            </div>
        </footer>
    );
}

export default Footer;
