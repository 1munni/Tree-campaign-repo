import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';
import Nav from '../pages/Shared/nav';

const RootLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
          <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;