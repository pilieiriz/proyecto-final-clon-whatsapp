import { useEffect, useRef } from 'react';
import useContacts from '../../../../contexts/Contacts/hooks/useContacts';

const useChatMessages = () => {
    const { activeMessages, chatBackground } = useContacts();
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [activeMessages]);

    return {
        activeMessages,
        chatBackground,
        messagesEndRef,
    };
};

export default useChatMessages;

