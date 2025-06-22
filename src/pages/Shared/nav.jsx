import React, { useState, useContext, use } from 'react';
import { Link, NavLink } from 'react-router'
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, signOutUser } = use(AuthContext); 

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log('Signed out user');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          Planty
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 items-center">
          <li>
            <NavLink to="/" className="hover:text-yellow-400">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/upEvents" className="hover:text-yellow-400">
              Upcoming Events
            </NavLink>
          </li>
          <li className="relative group">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="hover:text-yellow-400"
            >
              Profile ▾
            </button>
            <ul className={`absolute mt-2 left-0 bg-gray-700 rounded-md shadow-md w-40 ${profileOpen ? 'block' : 'hidden'} group-hover:block`}>
              <li>
                <NavLink to="/createEvents" className="block px-4 py-2 hover:bg-gray-600">
                  Create Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/manageEvents" className="block px-4 py-2 hover:bg-gray-600">
                  Manage Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/myAppliedEvents" className="block px-4 py-2 hover:bg-gray-600">
                  Join Events
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <>
              <span className="hidden lg:inline font-medium">{user.email}</span>
              <img
                src={user.photoURL || FaUserCircle}
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <button onClick={handleSignOut} className="btn">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/register" className="btn">
                Register
              </NavLink>
              <NavLink to="/signIn" className="btn">
                Sign In
              </NavLink>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 space-y-2">
          <NavLink to="/" className="block hover:text-yellow-400" onClick={() => setMobileMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/upEvents" className="block hover:text-yellow-400" onClick={() => setMobileMenuOpen(false)}>
            Upcoming Events
          </NavLink>
          <div>
            <p className="cursor-pointer hover:text-yellow-400" onClick={() => setProfileOpen(!profileOpen)}>
              Profile ▾
            </p>
            {profileOpen && (
              <ul className="ml-4 space-y-1">
                <li>
                  <NavLink to="/createEvents" className="block hover:text-yellow-400" onClick={() => setMobileMenuOpen(false)}>
                    Create Events
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/manageEvents" className="block hover:text-yellow-400" onClick={() => setMobileMenuOpen(false)}>
                    Manage Events
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/myAppliedEvents" className="block hover:text-yellow-400" onClick={() => setMobileMenuOpen(false)}>
                    Join Events
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
          <div className="mt-4">
            {user ? (
              <div className="space-y-2">
                <span className="block">{user.email}</span>
                <button onClick={handleSignOut} className="btn">
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <NavLink to="/register" className="btn block">
                  Register
                </NavLink>
                <NavLink to="/signIn" className="btn block">
                  Sign In
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
