import { LuSearch, LuMenu, LuEllipsisVertical } from 'react-icons/lu';
import ChatItem from '../ChatItem/ChatItem';
import ChatSettingsModal from '../ChatSettingsModal/ChatSettingsModal';
import useChatList from './useChatList';
import styles from './ChatList.module.css';

const ChatList = ({ isOpen, onToggle, hasActiveContact }) => {
    const {
        searchTerm,
        filteredContacts,
        isSettingsOpen,
        handleOverlayClick,
        handleSearchChange,
        openSettings,
        closeSettings,
    } = useChatList(hasActiveContact, onToggle);

    return (
        <>
            {isOpen && (
                <div
                    className={`${styles.chatList__overlay} ${!hasActiveContact ? styles['chatList__overlay--disabled'] : ''}`}
                    onClick={handleOverlayClick}
                    aria-hidden="true"
                />
            )}
            <aside className={`${styles.chatList} ${isOpen ? styles['chatList--open'] : ''}`}>
                <header className={styles.chatList__header}>
                    <button
                        className={styles.chatList__menuButton}
                        onClick={hasActiveContact ? onToggle : undefined}
                        aria-label="Cerrar lista de chats"
                        disabled={!hasActiveContact}
                        style={{ opacity: hasActiveContact ? 1 : 0.5, cursor: hasActiveContact ? 'pointer' : 'not-allowed' }}
                    >
                        <LuMenu />
                    </button>
                    <h1 className={styles.chatList__title}>Chats</h1>
                    <section className={styles.chatList__actions}>
                        <button
                            className={styles.chatList__actionButton}
                            aria-label="Más opciones"
                            onClick={openSettings}
                        >
                            <LuEllipsisVertical />
                        </button>
                    </section>
                </header>

                <section className={styles.chatList__search}>
                    <article className={styles.chatList__searchWrapper}>
                        <LuSearch className={styles.chatList__searchIcon} />
                        <input
                            type="text"
                            className={styles.chatList__searchInput}
                            placeholder="Buscar o iniciar un chat"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </article>
                </section>

                <section className={styles.chatList__contacts}>
                    {filteredContacts.map(contact => (
                        <ChatItem key={contact.id} contact={contact} />
                    ))}
                </section>

                <ChatSettingsModal
                    isOpen={isSettingsOpen}
                    onClose={closeSettings}
                />
            </aside>
        </>
    );
};

export default ChatList;

