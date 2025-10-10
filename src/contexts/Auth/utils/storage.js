import { STORAGE_KEYS } from '../constants/authConstants';


export const saveUserToStorage = (userData) => {
    try {
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userData));
    } catch (error) {
        console.error('Error al guardar datos en localStorage:', error);
    }
};


export const getUserFromStorage = () => {
    try {
        const userData = localStorage.getItem(STORAGE_KEYS.USER);
        return userData ? JSON.parse(userData) : null;
    } catch (error) {
        console.error('Error al obtener datos de localStorage:', error);
        return null;
    }
};


export const clearAuthStorage = () => {
    try {
        localStorage.removeItem(STORAGE_KEYS.USER);
    } catch (error) {
        console.error('Error al limpiar localStorage:', error);
    }
};

