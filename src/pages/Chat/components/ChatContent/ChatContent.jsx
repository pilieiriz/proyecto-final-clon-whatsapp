import ChatList from "../ChatList/ChatList";
import ChatWindow from "../ChatWindow/ChatWindow";
import useChatContent from "./useChatContent";


const ChatContent = ({ isChatListOpen, toggleChatList, closeChatList }) => {
    const { activeContact, handleToggle } = useChatContent(toggleChatList);

    return (
        <>
            <ChatList 
                isOpen={isChatListOpen} 
                onToggle={handleToggle}
                hasActiveContact={!!activeContact}
            />
            <ChatWindow 
                onToggleMenu={handleToggle} 
                onChatSelect={closeChatList}
                isChatListOpen={isChatListOpen}
            />
        </>
    );
};

export default ChatContent;

