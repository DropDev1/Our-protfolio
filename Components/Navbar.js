import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import classes from '../styles/Navbar.module.css';


const Navigation = () => {
    const menu = [
        { id: "m1", text: 'Services', link: '/service' },
        { id: "m2", text: 'About Us', link: '/about' },
        { id: "m3", text: 'Features', link: '/feature' },
        { id: "m5", text: 'Team', link: '/team' },
        { id: "m6", text: 'Blog', link: '/blog' },
        { id: "m4", text: 'Career', link: '/career' },
    ]
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" className={`container ${classes.newNav}`}>
            <Link href="/" className='me-5' passHref>
                <Image
                    src="https://i.ibb.co/fFpMCc3/logo.png"
                    width="100"
                    height="100"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto d-flex align-items-center">
                    {
                        menu?.map(item => (
                            <>
                                <Nav.Link className={classes.link}>
                                    <Link key={item?.id} href={item?.link} passHref>
                                        <span>{item?.text}</span>
                                    </Link>
                                </Nav.Link>
                                
                            </>
                        ))
                    }
                    <button className={classes.contact_Btn} href='/contact'>Contact Us</button>
                </Nav>

            </Navbar.Collapse>

        </Navbar>

    );
};

export default Navigation;