import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" className="container">

            <Navbar.Brand href="#home" className='me-5'>
                <img
                    src="https://i.ibb.co/fFpMCc3/logo.png"
                    width="100"
                    height="100"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className='link'>Services</Nav.Link>
                    <Nav.Link className='link'>About Us</Nav.Link>
                    <Nav.Link className='link'>Features</Nav.Link>
                    <Nav.Link className='link'>Team</Nav.Link>

                    <Nav.Link className='link'>Blog</Nav.Link>
                    <Nav.Link href="" className='link'>About Us</Nav.Link>
                    <Button className='link'>Contact Us</Button>

                </Nav>

            </Navbar.Collapse>

        </Navbar>

    );
};

export default Navigation;