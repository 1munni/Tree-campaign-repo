import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';
import Nav from '../pages/Shared/nav';
import ThemeToggle from '../context/ThemeContext/ThemeToggle';
import { ThemeContext, useDarkMode } from '../context/ThemeContext/ThemeProvider';
const RootLayout = () => {
  const {darkMode, setDarkMode}=useContext(ThemeContext)
  console.log(darkMode);
    return (
        <div className='max-w-6xl mx-auto' data-theme={`${darkMode?'light':'dark'}`}> 
                  <ThemeToggle></ThemeToggle>
          <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
      
       
        </div>
    );
};

export default RootLayout;