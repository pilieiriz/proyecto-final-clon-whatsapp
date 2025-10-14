import useContacts from "../../../../contexts/Contacts/hooks/useContacts";

const useChatContent = (toggleChatList) => {
    const { activeContact } = useContacts();

    const handleToggle = () => {
        toggleChatList(!!activeContact);
    };

    return {
        activeContact,
        handleToggle,
    };
};

export default useChatContent;

