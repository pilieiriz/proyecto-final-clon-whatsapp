import { useState } from 'react';

const useChat = () => {
    const [isChatListOpen, setIsChatListOpen] = useState(true);

    const toggleChatList = (hasActiveContact) => {
        setIsChatListOpen(prev => {
            if (prev && !hasActiveContact) {
                return prev; 
            }
            return !prev;
        });
    };

    const closeChatList = () => {
        setIsChatListOpen(false);
    };

    return {
        isChatListOpen,
        toggleChatList,
        closeChatList,
    };
};

export default useChat;

