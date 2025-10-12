import { useState } from 'react';
import useAuth from '../../contexts/Auth/hooks/useAuth';

const useLogin = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() && password.trim()) {
            login(email, password);
        }
    };

    return {
        email,
        password,
        showPassword,
        handleEmailChange,
        handlePasswordChange,
        toggleShowPassword,
        handleSubmit,
    };
};

export default useLogin;