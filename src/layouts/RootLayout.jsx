import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';
import Nav from '../pages/Shared/nav';
import { ThemeContext, useDarkMode } from '../context/ThemeContext/ThemeProvider';
const RootLayout = () => {
  const {darkMode, setDarkMode}=useContext(ThemeContext)
  console.log(darkMode);
    return (
      
        // Full screen background container
    <div
      className="min-h-screen w-full bg-base-100 "
      data-theme={`${darkMode ? 'light' : 'dark'}`}
    >
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 shadow-md text-base-content  bg-white/80 dark:bg-gray-900/80 backdrop-blur-md mb-10">
        <div className="max-w-6xl mx-auto px-4">
          <Nav />
        </div>
      </div>

      {/* Page Content */}
      <main className="max-w-6xl mx-auto px-4 py-6 min-h-[calc(100vh-100px)]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className=" mx-auto px-4 py-6">
        <Footer />
      </footer>
    </div>
    );
};

export default RootLayout;