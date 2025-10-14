import ContactsProvider from '../../contexts/Contacts/ContactsProvider';
import ChatContent from './components/ChatContent/ChatContent';
import useChat from './useChat';
import styles from './Chat.module.css';

const Chat = () => {
    const { isChatListOpen, toggleChatList, closeChatList } = useChat();

    return (
        <ContactsProvider>
            <main className={styles.chat}>
                <ChatContent 
                    isChatListOpen={isChatListOpen}
                    toggleChatList={toggleChatList}
                    closeChatList={closeChatList}
                />
            </main>
        </ContactsProvider>
    );
};

export default Chat;
