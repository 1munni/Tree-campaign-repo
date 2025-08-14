import React from 'react';

import { useDarkMode } from './ThemeProvider';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

const DarkModeToggoler = () => {
const {darkMode, setDarkMode}=useDarkMode()
    return (
        <div>
      <button
  onClick={() => setDarkMode(!darkMode)}
  className="btn flex items-center gap-2"
>
  {darkMode ? (
    <IoSunnyOutline className="w-5 h-5 text-yellow-400" />
  ) : (
    <IoMoonOutline className="w-5 h-5 text-blue-500" />
  )}
</button>


        </div>
    );
};

export default DarkModeToggoler;