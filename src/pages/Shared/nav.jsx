import React, { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router';
import { FaUserCircle, FaBars, FaTimes, FaSeedling } from 'react-icons/fa';
import ThemeToggle from '../../context/ThemeContext/ThemeToggle';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      await signOutUser();
      console.log('User signed out successfully');
      setMobileMenuOpen(false);
      setProfileOpen(false);
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };

  const linkClasses = ({ isActive }) =>
    `relative py-2 px-3 transition-colors duration-200 ease-in-out font-medium
    ${isActive
      ? 'text-green-600 dark:text-green-400'
      : 'text-gray-700 hover:text-green-600 dark:text-gray-100 dark:hover:text-green-400'
    }`;
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      setProfileOpen(false);
    }
  };

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setProfileOpen(false);
  };

  return (
    <nav >
      <div >
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-3xl font-bold tracking-tight text-green-700 dark:text-green-400 transition-colors duration-300 hover:scale-105">
              <FaSeedling className="mr-2" />
              Planty
            </Link>

            <div className="hidden lg:ml-8 lg:flex lg:space-x-8">
              <NavLink to="/" className={linkClasses}>Home</NavLink>
              <NavLink to="/upEvents" className={linkClasses}>Upcoming Events</NavLink>
              <NavLink to="/aboutUs" className={linkClasses}>About Us</NavLink>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <>
                <div className="relative">
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center text-gray-700 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 focus:outline-none"
                  >
                    <img
                      src={user.photoURL || `https://placehold.co/40x40/E5E7EB/4B5563?text=Profile`}
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/40x40/E5E7EB/4B5563?text=Profile`;
                      }}
                    />
                    <span className="ml-2 hidden xl:inline">{user.displayName || user.email || 'Profile'}</span>
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button>
                  <ul className={`absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 transition-transform duration-200 transform origin-top-right ${profileOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                    <li><NavLink to="/createEvents" onClick={() => setProfileOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600">Create Events</NavLink></li>
                    <li><NavLink to="/manageEvents" onClick={() => setProfileOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600">Manage Events</NavLink></li>
                    <li><NavLink to="/myAppliedEvents" onClick={() => setProfileOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600">Joined Events</NavLink></li>
                    <li><button onClick={handleSignOut} className="w-full text-left block px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-b-md">Sign Out</button></li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <NavLink to="/register" className="btn px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors duration-200">Register</NavLink>
                <NavLink to="/signIn" className="btn px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400 border border-green-600 dark:border-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-gray-700 transition-colors duration-200">Sign In</NavLink>
              </>
            )}
            <ThemeToggle />
          </div>

          <div className="-mr-2 flex items-center lg:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink to="/" onClick={closeMenus} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 dark:text-gray-100 dark:hover:text-green-400 dark:hover:bg-gray-700">Home</NavLink>
          <NavLink to="/upEvents" onClick={closeMenus} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 dark:text-gray-100 dark:hover:text-green-400 dark:hover:bg-gray-700">Upcoming Events</NavLink>
          <NavLink to="/aboutUs" onClick={closeMenus} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 dark:text-gray-100 dark:hover:text-green-400 dark:hover:bg-gray-700">About Us</NavLink>

          {user && (
            <div className="border-t border-gray-200 dark:border-gray-600 pt-2 mt-2 space-y-1">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-100 hover:text-green-600 hover:bg-gray-50 dark:hover:text-green-400 dark:hover:bg-gray-700 flex items-center justify-between"
              >
                <span>Profile</span>
                <svg className={`h-5 w-5 transform transition-transform duration-200 ${profileOpen ? 'rotate-180' : 'rotate-0'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
              <div className={`pl-4 space-y-1 transition-all duration-300 ease-in-out overflow-hidden ${
                profileOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <NavLink to="/createEvents" onClick={closeMenus} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-green-400 dark:hover:bg-gray-700">Create Events</NavLink>
                <NavLink to="/manageEvents" onClick={closeMenus} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-green-400 dark:hover:bg-gray-700">Manage Events</NavLink>
                <NavLink to="/myAppliedEvents" onClick={closeMenus} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-green-400 dark:hover:bg-gray-700">Joined Events</NavLink>
              </div>
            </div>
          )}

          <div className="border-t border-gray-200 dark:border-gray-600 pt-2 mt-2">
            {user ? (
              <button onClick={handleSignOut} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-red-500 hover:bg-gray-50 dark:hover:bg-gray-700">
                Sign Out
              </button>
            ) : (
              <div className="space-y-1">
                <NavLink to="/register" onClick={closeMenus} className="block px-3 py-2 text-center text-base font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors duration-200">
                  Register
                </NavLink>
                <NavLink to="/signIn" onClick={closeMenus} className="block px-3 py-2 text-center text-base font-medium text-green-600 dark:text-green-400 border border-green-600 dark:border-green-400 rounded-md hover:bg-green-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  Sign In
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;