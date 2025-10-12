import Modal from '../Modal/Modal';
import styles from './SettingsModal.module.css';
import { LuSun, LuMoon, LuCircleHelp, LuChevronRight } from 'react-icons/lu';
import useTheme from '../../contexts/Theme/hooks/useTheme';
import { useNavigate } from 'react-router-dom';

const SettingsModal = ({ isOpen, onClose }) => {
    const { isDarkMode, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const handleHelpClick = () => {
        onClose();
        navigate('/help');
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Configuración">
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
                    <h3 className={styles.settings__section_title}>Soporte</h3>
                    <article
                        className={styles.settings__option_clickable}
                        onClick={handleHelpClick}
                    >
                        <div className={styles.settings__option_with_icon}>
                            <LuCircleHelp className={styles.settings__option_icon} />
                            <div className={styles.settings__option_info}>
                                <span className={styles.settings__option_label}>Ayuda</span>
                                <span className={styles.settings__option_description}>
                                    Documentación y guía de uso
                                </span>
                            </div>
                        </div>
                        <LuChevronRight className={styles.settings__chevron} />
                    </article>
                </section>
            </section>
        </Modal>
    );
};

export default SettingsModal;

