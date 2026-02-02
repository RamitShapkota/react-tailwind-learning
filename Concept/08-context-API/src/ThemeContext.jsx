//Create the Context
import {  createContext , useState } from "react";

// 1. Create the Context
export const ThemeContext = createContext();

// 2. Create a Provider Component
export const ThemeProvider = ({ children }) =>{
    const[theme,setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{theme , toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );

};