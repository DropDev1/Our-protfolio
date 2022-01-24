import React from 'react';
import logo from '../images/Logo Transparent-01.png'
const Footer = () => {
    return (
        <div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="service">
                <h3>Services</h3>
                <li>Robotics and Drones</li>
                <li>AI for Cloud Services</li>
                <li>Virtual Reality</li>
                <li>Deep Learning</li>
                <li>Manufacturing</li>
            </div>
            <div className="links">
                <h3>Quick Links</h3>
                <li>About us</li>
                <li>Features</li>
                <li>Blog</li>
                <li>Team</li>
                <li>Contact</li>

            </div>
            <div className="contacts">
                <h3>Contacts</h3>
                <li>Address: 2750 Quadra Street Victoria, Canada</li>
                <li>Email: alpas@gmail.com</li>
                <li>Phone: +44 587 154756</li>
                <li>Fax: +44 785 4578964</li>

            </div>
        </div>
    );
};

export default Footer;