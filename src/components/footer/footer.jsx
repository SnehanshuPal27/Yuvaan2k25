import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="modern-footer">
            <div className="footer-container flex justify-between">
                <div className="footer-section about">
                    <div className='h-full flex flex-col gap-4'>
                        <div>
                            <h4 className='text-white text-xl'>Mukund Aggrawal</h4>
                            <div className='flex gap-2 items-center '>
                                <img className='h-5' src="/phone-icon.png" alt="" />
                                <h4 className='text-gray-300 text-lg'>+91 9580256143</h4>
                            </div>
                        </div>

                        <div>
                            <h4 className='text-white text-xl'>Harsha Vardhan</h4>
                            <div className='flex gap-2 items-center '>
                                <img className='h-5' src="/phone-icon.png" alt="" />
                                <h4 className='text-gray-300 text-lg'>+91 9346584553</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li><FaEnvelope className="icon" /> yuvaan@iiitg.ac.in</li>
                        <li>IIIT Guwahati, Bongora </li>
                        <li>Guwahati, Assam - 781015</li>

                    </ul>
                </div>
                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/YuvaanIIITG/" target="_blank" rel="noreferrer">
                            <FaFacebook className="icon" />
                        </a>
                        <a href="https://x.com/Yuvaan_IIITG" target="_blank" rel="noreferrer">
                            <FaTwitter className="icon" />
                        </a>
                        <a href="https://www.instagram.com/yuvaan_iiitg/" target="_blank" rel="noreferrer">
                            <FaInstagram className="icon" />
                        </a>
                        <a href="https://www.linkedin.com/company/yuvaaniiitg/" target="_blank" rel="noreferrer">
                            <FaLinkedin className="icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Yuvaan IIIT Guwahati. Designed with ❤️ by Web & Creatives Team.</p>
            </div>
        </footer>
    );
}

export default Footer;
