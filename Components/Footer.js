import React from 'react';

const Footer = () => {
    return (
        <div className='d-flex row p-2 my-5 container'>
            <div className="logo col-lg-3">
                <img src="https://i.ibb.co/fFpMCc3/logo.png" style={{ width: "70%" }} alt="" />
            </div>
            <div className="service col-lg-3 ">
                <h3>Services</h3>
                <p>Robotics and Drones</p>
                <p>AI for Cloud Services</p>
                <p>Virtual Reapty</p>
                <p>Deep Learning</p>
                <p>Manufacturing</p>
            </div>
            <div className="links col-lg-3">
                <h3>Quick Links</h3>
                <p>About us</p>
                <p>Features</p>
                <p>Blog</p>
                <p>Team</p>
                <p>Contact</p>

            </div>
            <div className="contacts col-lg-3">
                <h3>Contacts</h3>
                <p>Address: 2750 Quadra Street Victoria, Canada</p>
                <p>Email: alpas@gmail.com</p>
                <p>Phone: +44 587 154756</p>
                <p>Fax: +44 785 4578964</p>

            </div>
        </div>
    );
};

export default Footer;