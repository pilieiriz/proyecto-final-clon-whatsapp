import { useEffect } from 'react';
import styles from './Modal.module.css';
import { LuX } from 'react-icons/lu';

const Modal = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles.modal__overlay} onClick={onClose}>
            <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
                <header className={styles.modal__header}>
                    <h2 className={styles.modal__title}>{title}</h2>
                    <button
                        className={styles.modal__close}
                        onClick={onClose}
                        aria-label="Cerrar modal"
                    >
                        <LuX />
                    </button>
                </header>
                <div className={styles.modal__body}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;

