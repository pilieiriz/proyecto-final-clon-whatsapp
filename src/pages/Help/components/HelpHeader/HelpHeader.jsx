import { LuCircleHelp } from 'react-icons/lu';
import styles from './HelpHeader.module.css';

const HelpHeader = ({ title, subtitle }) => {
    return (
        <header className={styles.header}>
            <LuCircleHelp className={styles.header_icon} />
            <div className={styles.header_content}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </header>
    );
};

export default HelpHeader;

