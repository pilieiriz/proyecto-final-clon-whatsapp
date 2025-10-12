import styles from './TechCard.module.css';

const TechCard = ({ icon: Icon, name, version }) => {
    return (
        <div className={styles.tech_card}>
            <Icon className={styles.tech_icon} />
            <div className={styles.tech_info}>
                <div className={styles.tech_name}>{name}</div>
                <div className={styles.tech_version}>{version}</div>
            </div>
        </div>
    );
};

export default TechCard;

