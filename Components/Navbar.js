import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';


const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" className="container">

            <Navbar.Brand as={Link} href="/" className='me-5'>
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
                    {/* <Link href='/service' className="mx-5">Services</Link> */}
                    <Nav.Link as={Link} className='mx-5' href='/service' >Services</Nav.Link>
                    <Nav.Link as={Link} className='link' href='/career'>Career</Nav.Link>
                    <Nav.Link as={Link} className='link' href='/feature'>Features</Nav.Link>
                    <Nav.Link as={Link} className='link' href='/team'>Team</Nav.Link>

                    <Nav.Link as={Link} className='link' href='/blog'>Blog</Nav.Link>
                    <Nav.Link as={Link} href="/about" className='link'>About Us</Nav.Link>
                    <Button as={Link} className='link' href='/contact'>Contact Us</Button>

                </Nav>

            </Navbar.Collapse>

        </Navbar>

    );
};

export default Navigation;