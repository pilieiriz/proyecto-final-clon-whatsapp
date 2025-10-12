import Modal from '../Modal/Modal';
import styles from './SettingsModal.module.css';
import { LuSun, LuMoon } from 'react-icons/lu';
import useTheme from '../../contexts/Theme/hooks/useTheme';

const SettingsModal = ({ isOpen, onClose }) => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Configuración">
            <section className={styles.settings__section}>
                <h3 className={styles.settings__section_title}>Apariencia</h3>
                <div className={styles.settings__option}>
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
                </div>
            </section>
        </Modal>
    );
};

export default SettingsModal;

