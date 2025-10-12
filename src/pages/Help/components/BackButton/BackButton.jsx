import { LuArrowLeft } from 'react-icons/lu';
import styles from './BackButton.module.css';

const BackButton = ({ onClick }) => {
    return (
        <button
            className={styles.back_button}
            onClick={onClick}
            aria-label="Volver al chat"
        >
            <LuArrowLeft />
        </button>
    );
};

export default BackButton;

