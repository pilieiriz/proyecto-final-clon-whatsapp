import Modal from '../../../../components/Modal/Modal';
import styles from './ChatSettingsModal.module.css';
import { LuSun, LuMoon, LuPalette, LuLogOut } from 'react-icons/lu';
import useChatSettingsModal from './useChatSettingsModal';

const ChatSettingsModal = ({ isOpen, onClose }) => {
    const {
        isDarkMode,
        toggleTheme,
        chatBackground,
        setChatBackground,
        backgrounds,
        handleLogout,
    } = useChatSettingsModal(onClose);

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Configuración del Chat">
            <section className={styles.settings__container}>
                <section className={styles.settings__section}>
                    <h3 className={styles.settings__section_title}>Apariencia</h3>
                    <article className={styles.settings__option}>
                        <div className={styles.settings__option_info}>
                            <span className={styles.settings__option_label}>Tema</span>
                            <span className={styles.settings__option_description}>
                                {isDarkMode ? 'Modo oscuro activado' : 'Modo claro activado'}
                            </span>
                        </div>
                        <button
                            onClick={toggleTheme}
                            className={styles.settings__toggle}
                            aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                        >
                            {isDarkMode ? <LuSun /> : <LuMoon />}
                        </button>
                    </article>
                </section>

                <section className={styles.settings__section}>
                    <h3 className={styles.settings__section_title}>
                        <LuPalette className={styles.settings__section_icon} />
                        Fondo de mensajes
                    </h3>
                    <div className={styles.settings__backgrounds}>
                        {backgrounds.map((bg) => (
                            <button
                                key={bg.id}
                                className={`${styles.settings__background_item} ${
                                    chatBackground === bg.id ? styles['settings__background_item--active'] : ''
                                }`}
                                onClick={() => setChatBackground(bg.id)}
                                aria-label={`Seleccionar fondo ${bg.name}`}
                            >
                                <div
                                    className={styles.settings__background_preview}
                                    style={{ backgroundColor: bg.color }}
                                />
                                <span className={styles.settings__background_name}>{bg.name}</span>
                            </button>
                        ))}
                    </div>
                </section>

                <section className={styles.settings__section}>
                    <h3 className={styles.settings__section_title}>Cuenta</h3>
                    <article className={styles.settings__option}>
                        <div className={styles.settings__option_info}>
                            <span className={styles.settings__option_label}>Cerrar sesión</span>
                            <span className={styles.settings__option_description}>
                                Salir de tu cuenta actual
                            </span>
                        </div>
                        <button
                            onClick={handleLogout}
                            className={`${styles.settings__toggle} ${styles.settings__logout_button}`}
                            aria-label="Cerrar sesión"
                        >
                            <LuLogOut />
                        </button>
                    </article>
                </section>
            </section>
        </Modal>
    );
};

export default ChatSettingsModal;

