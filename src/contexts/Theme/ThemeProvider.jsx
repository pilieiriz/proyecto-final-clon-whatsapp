import { useState, useEffect } from 'react';
import ThemeContext from './ThemeContext';
import { THEMES } from './constants/themeConstants';
import {
    saveThemeToStorage,
    getThemeFromStorage,
} from './utils/storage';

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(THEMES.LIGHT);

    const isDarkMode = theme === THEMES.DARK;

    const toggleTheme = () => {
        const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
        setTheme(newTheme);
        saveThemeToStorage(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const setLightTheme = () => {
        setTheme(THEMES.LIGHT);
        saveThemeToStorage(THEMES.LIGHT);
        document.documentElement.setAttribute('data-theme', THEMES.LIGHT);
    };

    const setDarkTheme = () => {
        setTheme(THEMES.DARK);
        saveThemeToStorage(THEMES.DARK);
        document.documentElement.setAttribute('data-theme', THEMES.DARK);
    };

    useEffect(() => {
        const storedTheme = getThemeFromStorage();
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const initialTheme = storedTheme || (prefersDark ? THEMES.DARK : THEMES.LIGHT);
        
        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);
    }, []);

    const value = {
        theme,
        isDarkMode,
        toggleTheme,
        setLightTheme,
        setDarkTheme,
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;

