import { useState, useMemo } from 'react';
import useContacts from '../../../../contexts/Contacts/hooks/useContacts';

const useChatList = (hasActiveContact, onToggle) => {
    const { contacts } = useContacts();
    const [searchTerm, setSearchTerm] = useState('');
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const filteredContacts = useMemo(() => 
        contacts.filter(contact =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase())
        ), 
        [contacts, searchTerm]
    );

    const handleOverlayClick = () => {
        if (hasActiveContact) {
            onToggle();
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const openSettings = () => {
        setIsSettingsOpen(true);
    };

    const closeSettings = () => {
        setIsSettingsOpen(false);
    };

    return {
        searchTerm,
        filteredContacts,
        isSettingsOpen,
        handleOverlayClick,
        handleSearchChange,
        openSettings,
        closeSettings,
    };
};

export default useChatList;

