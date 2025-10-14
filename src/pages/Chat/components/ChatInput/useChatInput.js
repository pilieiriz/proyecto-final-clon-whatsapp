import { useState } from 'react';
import useContacts from '../../../../contexts/Contacts/hooks/useContacts';

const useChatInput = () => {
    const { activeContactId, sendMessage } = useContacts();
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() && activeContactId) {
            sendMessage(activeContactId, message);
            setMessage('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    return {
        message,
        handleSubmit,
        handleKeyDown,
        handleMessageChange,
    };
};

export default useChatInput;

