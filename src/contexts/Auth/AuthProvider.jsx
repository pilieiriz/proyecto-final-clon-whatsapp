import { useState, useEffect } from 'react';
import AuthContext from './AuthContext';
import {
    saveUserToStorage,
    getUserFromStorage,
    clearAuthStorage,
} from './utils/storage';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    
    const isAuthenticated = user !== null;


    const login = (nombre, email, contraseña) => {
        const userData = { nombre, email, contraseña };
        setUser(userData);
        saveUserToStorage(userData);
    }


    const logout = () => {
        setUser(null);
        clearAuthStorage();
    }

    useEffect(() => {
        const storedUser = getUserFromStorage();
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);


    const value = {
        user,
        isAuthenticated,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

