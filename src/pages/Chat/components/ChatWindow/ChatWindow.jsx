import ChatHeader from '../ChatHeader/ChatHeader';
import ChatMessages from '../ChatMessages/ChatMessages';
import ChatInput from '../ChatInput/ChatInput';
import useChatWindow from './useChatWindow';
import styles from './ChatWindow.module.css';

const ChatWindow = ({ onToggleMenu, onChatSelect, isChatListOpen }) => {
    const { activeContact } = useChatWindow(onChatSelect);

    if (!activeContact) {
        return (
            <div className={styles.chatWindow__empty}>
                <div className={styles.chatWindow__emptyContent}>
                    <h2 className={styles.chatWindow__emptyTitle}>Clon de WhatsApp</h2>
                    <p className={styles.chatWindow__emptyText}>
                        Podés comenzar a chatear con tus amigos.
                    </p>
                </div>
                <p className={styles.chatWindow__emptyText}>
                    Hecho por <a className={styles.chatWindow__emptyText__link} href="https://github.com/pilieiriz" target="_blank" rel="noopener noreferrer">Pilar Eiriz</a>
                </p>
            </div>
        );
    }

    return (
        <div className={`${styles.chatWindow} ${isChatListOpen ? styles['chatWindow--hidden'] : ''}`}>
            <ChatHeader contact={activeContact} onToggleMenu={onToggleMenu} />
            <ChatMessages />
            <ChatInput />
        </div>
    );
};

export default ChatWindow;

