import { useContext } from 'react';
import ThemeContext from '../ThemeContext';


const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
    }

    return context;
};

export default useTheme;

