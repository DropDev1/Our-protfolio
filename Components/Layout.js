import React from 'react';
import Footer from './Footer';
import Navigation from './Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <Navigation></Navigation>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;