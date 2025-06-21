import React, { use } from 'react';
import { NavLink } from 'react-router'
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
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
    <div className="navbar bg-base-100 shadow-sm">
      {/* START */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'text-indigo-500' : '')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/upEvents"
                className={({ isActive }) => (isActive ? 'text-indigo-500' : '')}
              >
                Upcoming Events
              </NavLink>
            </li>
            <li>
              <details>
                <summary>Profile</summary>
                <ul className="p-2">
                  <li>
                    <NavLink
                      to="/createEvents"
                      className={({ isActive }) => (isActive ? 'text-indigo-500' : '')}
                    >
                      Create Event
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/manageEvents"
                      className={({ isActive }) => (isActive ? 'text-indigo-500' : '')}
                    >
                      Manage Event
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/joinEvents"
                      className={({ isActive }) => (isActive ? 'text-indigo-500' : '')}
                    >
                      Join Event
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'text-indigo-500' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/upEvents"
              className={({ isActive }) => (isActive ? 'text-indigo-500' : '')}
            >
              Upcoming Events
            </NavLink>
          </li>
          <li>
            <details>
              <summary>Profile</summary>
              <ul className="p-2">
                <li>
                  <NavLink
                    to="/createEvents"
                    className={({ isActive }) => (isActive ? 'text-indigo-500' : '')}
                  >
                    Create Event
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/manageEvents"
                    className={({ isActive }) => (isActive ? 'text-indigo-500' : '')}
                  >
                    Manage Event
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/joinEvents"
                    className={({ isActive }) => (isActive ? 'text-indigo-500' : '')}
                  >
                    Join Event
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* END */}
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <span className="font-bold shadow hidden lg:inline">{user.email}</span>
            <img
              className="w-8 h-8 rounded-full"
              src={user.photoURL || FaUserCircle}
              alt="User avatar"
              title={user.displayName || 'No Name'}
            />
            <button className="btn" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <NavLink className="btn" to="/register">
              Register
            </NavLink>
            <NavLink className="btn" to="/signIn">
              Sign In
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
