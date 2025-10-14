const useChatHeader = (onToggleMenu) => {
    const handleMenuClick = (e) => {
        e.preventDefault();
        if (onToggleMenu) {
            onToggleMenu();
        }
    };

    return {
        handleMenuClick,
    };
};

export default useChatHeader;

