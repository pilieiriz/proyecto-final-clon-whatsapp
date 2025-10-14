import useTheme from '../../../../contexts/Theme/hooks/useTheme';
import useContacts from '../../../../contexts/Contacts/hooks/useContacts';
import useAuth from '../../../../contexts/Auth/hooks/useAuth';

const CHAT_BACKGROUNDS = [
    { id: 'default', name: 'Por defecto', color: 'var(--bg-primary)' },
    { id: 'blue', name: 'Azul', color: '#e3f2fd' },
    { id: 'green', name: 'Verde', color: '#e8f5e9' },
    { id: 'purple', name: 'Violeta', color: '#f3e5f5' },
    { id: 'orange', name: 'Naranja', color: '#fff3e0' },
    { id: 'pink', name: 'Rosa', color: '#fce4ec' },
];

const CHAT_BACKGROUNDS_DARK = [
    { id: 'default', name: 'Por defecto', color: 'var(--bg-primary)' },
    { id: 'blue', name: 'Azul', color: '#0d1b2a' },
    { id: 'green', name: 'Verde', color: '#0a1f0f' },
    { id: 'purple', name: 'Violeta', color: '#1a0f1f' },
    { id: 'orange', name: 'Naranja', color: '#1f1508' },
    { id: 'pink', name: 'Rosa', color: '#1f0a14' },
];

const useChatSettingsModal = (onClose) => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { chatBackground, setChatBackground } = useContacts();
    const { logout } = useAuth();

    const backgrounds = isDarkMode ? CHAT_BACKGROUNDS_DARK : CHAT_BACKGROUNDS;

    const handleLogout = () => {
        logout();
        onClose();
    };

    return {
        isDarkMode,
        toggleTheme,
        chatBackground,
        setChatBackground,
        backgrounds,
        handleLogout,
    };
};

export default useChatSettingsModal;

