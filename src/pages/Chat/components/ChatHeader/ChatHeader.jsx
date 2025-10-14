import { LuMenu } from 'react-icons/lu';
import useChatHeader from './useChatHeader';
import styles from './ChatHeader.module.css';

const ChatHeader = ({ contact, onToggleMenu }) => {
    const { handleMenuClick } = useChatHeader(onToggleMenu);

    console.log(contact);

    return (
        <header className={styles.chatHeader}>
            <button
                className={styles.chatHeader__menuButton}
                onClick={handleMenuClick}
                aria-label="Abrir lista de chats"
                type="button"
            >
                <LuMenu />
            </button>

            <div className={styles.chatHeader__info}>
                <img
                    src={contact.avatar}
                    alt={contact.name}
                    className={styles.chatHeader__avatar}
                />
                <div className={styles.chatHeader__details}>
                    <h2 className={styles.chatHeader__name}>{contact.name}</h2>
                    <p className={styles.chatHeader__status}>
                        {contact.online ? 'En línea' : contact.lastOnline}
                    </p>
                </div>
            </div>
        </header>
    );
};

export default ChatHeader;

