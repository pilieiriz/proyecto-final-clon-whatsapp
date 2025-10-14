import useChatMessages from './useChatMessages';
import styles from './ChatMessages.module.css';

const ChatMessages = () => {
    const { activeMessages, chatBackground, messagesEndRef } = useChatMessages();

    return (
        <section 
            className={styles.chatMessages}
            data-background={chatBackground}
        >
            <article className={styles.chatMessages__content}>
                {activeMessages.map(message => (
                    <div
                        key={message.id}
                        className={`${styles.chatMessages__message} ${
                            message.sent 
                                ? styles['chatMessages__message--sent'] 
                                : styles['chatMessages__message--received']
                        }`}
                    >
                        <p className={styles.chatMessages__text}>{message.text}</p>
                        <span className={styles.chatMessages__time}>{message.time}</span>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </article>
        </section>
    );
};

export default ChatMessages;

