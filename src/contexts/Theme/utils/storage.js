import { STORAGE_KEYS } from '../constants/themeConstants';

export const saveThemeToStorage = (theme) => {
    try {
        localStorage.setItem(STORAGE_KEYS.THEME, theme);
    } catch (error) {
        console.error('Error al guardar el tema en localStorage:', error);
    }
};

export const getThemeFromStorage = () => {
    try {
        return localStorage.getItem(STORAGE_KEYS.THEME);
    } catch (error) {
        console.error('Error al obtener el tema de localStorage:', error);
        return null;
    }
};

export const clearThemeStorage = () => {
    try {
        localStorage.removeItem(STORAGE_KEYS.THEME);
    } catch (error) {
        console.error('Error al limpiar el tema de localStorage:', error);
    }
};

