import styles from './FeatureListItem.module.css';

const FeatureListItem = ({ icon: Icon, title, description }) => {
    return (
        <li className={styles.list_item}>
            <Icon className={styles.list_icon} />
            <div className={styles.list_content}>
                <div className={styles.list_title}>{title}</div>
                <div className={styles.list_description}>{description}</div>
            </div>
        </li>
    );
};

export default FeatureListItem;

