import {  LuSend } from 'react-icons/lu';
import useChatInput from './useChatInput';
import styles from './ChatInput.module.css';

const ChatInput = () => {
    const { message, handleSubmit, handleKeyDown, handleMessageChange } = useChatInput();

    return (
        <form className={styles.chatInput} onSubmit={handleSubmit}>
            <section className={styles.chatInput__wrapper}>
                <input
                    type="text"
                    className={styles.chatInput__input}
                    placeholder="Escribe un mensaje"
                    value={message}
                    onChange={handleMessageChange}
                    onKeyDown={handleKeyDown}
                />
            </section>

            <button
                type="submit"
                className={`${styles.chatInput__button} ${styles['chatInput__button--send']}`}
                aria-label={message.trim() ? 'Enviar mensaje' : 'Grabar audio'}
            >
                <LuSend />
            </button>
        </form>
    );
};

export default ChatInput;

