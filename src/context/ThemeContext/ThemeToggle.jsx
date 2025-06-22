import React from 'react';
import DarkModeToggoler from './DarkModeToggoler';
import { ThemeProvider } from './ThemeProvider';

const ThemeToggle = () => {
    return (
       <>
   
        <div className=' mt-5'>
            <DarkModeToggoler></DarkModeToggoler>
        </div>
     
       </>
    );
};

export default ThemeToggle;