import useContacts from '../../../../contexts/Contacts/hooks/useContacts';
import styles from './ChatItem.module.css';

const ChatItem = ({ contact }) => {
    const { activeContactId, setActiveContactId } = useContacts();
    const isActive = activeContactId === contact.id;

    const handleClick = () => {
        setActiveContactId(contact.id);
    };

    return (
        <article
            className={`${styles.chatItem} ${isActive ? styles['chatItem--active'] : ''}`}
            onClick={handleClick}
        >
            <section className={styles.chatItem__avatarWrapper}>
                <img
                    src={contact.avatar}
                    alt={contact.name}
                    className={styles.chatItem__avatar}
                />
                {contact.online && (
                    <span className={styles.chatItem__onlineIndicator} />
                )}
            </section>

            <section className={styles.chatItem__content}>
                <article className={styles.chatItem__header}>
                    <h3 className={styles.chatItem__name}>{contact.name}</h3>
                    <span className={styles.chatItem__time}>{contact.lastMessageTime}</span>
                </article>
                <article className={styles.chatItem__footer}>
                    <p className={styles.chatItem__message}>{contact.lastMessage}</p>
                    {contact.unread > 0 && (
                        <span className={styles.chatItem__unread}>{contact.unread}</span>
                    )}
                </article>
            </section>
        </article>
    );
};

export default ChatItem;

