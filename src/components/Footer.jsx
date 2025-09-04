import React from 'react';
import { Link } from 'react-router-dom'; // Add this import
import './Footer.css'; // Change 'Footer.css' to 'footer.css' if your file is lowercase

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Clothing Website. All rights reserved.</p>
                <ul className="footer-links">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;