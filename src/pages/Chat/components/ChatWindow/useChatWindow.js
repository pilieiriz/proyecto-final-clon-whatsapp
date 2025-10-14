import { useEffect, useRef } from 'react';
import useContacts from '../../../../contexts/Contacts/hooks/useContacts';

const useChatWindow = (onChatSelect) => {
    const { activeContact } = useContacts();
    const prevContactIdRef = useRef(null);

    useEffect(() => {
        if (activeContact && activeContact.id !== prevContactIdRef.current) {
            prevContactIdRef.current = activeContact.id;
            if (onChatSelect) {
                onChatSelect();
            }
        }
    }, [activeContact, onChatSelect]);

    return {
        activeContact,
    };
};

export default useChatWindow;

