
import { useContext } from "react";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext('light');

export const ThemeProvider = ({ children }) => {
 const [darkMode, setDarkMode] = useState(localStorage.getItem('theme')==='dark');

 useEffect(()=>{
    if(darkMode){

localStorage.setItem("theme","dark");
    }
    else{

localStorage.setItem("theme","light");
    }
 },[darkMode])

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useDarkMode=()=>useContext(ThemeContext)

