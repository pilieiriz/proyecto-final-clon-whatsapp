import styles from './HelpSection.module.css';

const HelpSection = ({ Icon, title, children }) => {
    return (
        <section className={styles.section}>
            <div className={styles.section_header}>
                <Icon className={styles.section_icon} />
                <h2 className={styles.section_title}>{title}</h2>
            </div>
            {children}
        </section>
    );
};

export default HelpSection;

