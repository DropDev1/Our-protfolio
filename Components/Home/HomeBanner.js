import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const HomeBanner = () => {
    return (
        <Row className='banner'>
            <Col xs={12} md={6} className="heading">
                <h1>We Provide Software Development <br /> and Artificial Intelligence (AI) services</h1>
                <p className='p'>Empowering People with AI <br />
                    The integration of information, design, and technology.</p>
                <button className='button' >Get Started</button>
            </Col>
            <Col xs={12} md={6} className="image">
                <img src="https://i.ibb.co/xXv8p8S/Mask-Group-11.png" alt="" />
            </Col>
        </Row>

    );
};

export default HomeBanner;