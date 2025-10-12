import { useState } from 'react';
import useLogin from './useLogin';
import { LuEye, LuEyeOff, LuSettings } from 'react-icons/lu';
import SettingsModal from '../../components/SettingsModal/SettingsModal';
import styles from './Login.module.css';

const Login = () => {
    const {
        email,
        password,
        showPassword,
        handleEmailChange,
        handlePasswordChange,
        toggleShowPassword,
        handleSubmit,
    } = useLogin();

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    return (
        <main className={styles.login}>
            <button
                className={styles.login__settings}
                onClick={() => setIsSettingsOpen(true)}
                aria-label="Abrir configuración"
            >
                <LuSettings />
            </button>

            <article className={styles.login__container}>
                <header className={styles.login__header}>
                    <h1 className={styles.login__title}>Iniciar Sesión</h1>
                </header>

                <form onSubmit={handleSubmit} className={styles.login__form}>
                    <fieldset className={styles.login__fieldset}>
                        <legend className={styles.login__legend}>Credenciales de acceso</legend>

                        <label className={styles.login__field}>
                            <span className={styles.login__label}>Email</span>
                            <input
                                className={styles.login__input}
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Ingresa tu email"
                                autoComplete="email"
                                required
                            />
                        </label>

                        <label className={`${styles.login__field} ${styles['login__field--password']}`}>
                            <span className={styles.login__label}>Contraseña</span>
                            <span className={styles.login__input_wrapper}>
                                <input
                                    className={`${styles.login__input} ${styles['login__input--password']}`}
                                    type={showPassword ? "text" : "password"}
                                    id="contraseña"
                                    name="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="Ingresa tu contraseña"
                                    autoComplete="current-password"
                                    required
                                />
                                <div className={styles.login__toggle_wrapper}>
                                    <button
                                        type="button"
                                        className={styles.login__toggle}
                                        onClick={toggleShowPassword}
                                        aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                    >
                                        {showPassword ? <LuEyeOff /> : <LuEye />}
                                    </button>
                                </div>
                            </span>
                        </label>
                    </fieldset>

                    <button type="submit" className={styles.login__submit}>
                        Ingresar
                    </button>
                </form>
            </article>

            <SettingsModal
                isOpen={isSettingsOpen}
                onClose={() => setIsSettingsOpen(false)}
            />
        </main>
    );
};

export default Login;