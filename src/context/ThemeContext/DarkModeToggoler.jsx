import React from 'react';
import { IoSunnyOutline } from "react-icons/io5";
import { useDarkMode } from './ThemeProvider';

const DarkModeToggoler = () => {
const {darkMode, setDarkMode}=useDarkMode()
    return (
        <div>
            <button onClick={()=> setDarkMode(!darkMode)} className='px-6 py-2 bg-gray-200 dark:bg-white/10 rounded-md transition-all cursor-pointer'>
                
              {darkMode? 'Light mode':'Dark mode'}
                
                </button>
        </div>
    );
};

export default DarkModeToggoler;