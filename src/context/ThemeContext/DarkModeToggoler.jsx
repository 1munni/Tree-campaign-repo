import React from 'react';

import { useDarkMode } from './ThemeProvider';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

const DarkModeToggoler = () => {
const {darkMode, setDarkMode}=useDarkMode()
    return (
        <div>
         <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center gap-2 px-6 py-2 bg-gray-200 dark:bg-white/10 rounded-md transition-all cursor-pointer"
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