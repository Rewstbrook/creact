import React, { useEffect, useState } from "react";

const ChatPage = () => {
    const [chat, setChat] = useState([]);

    useEffect(() => {
        const fetchChatData = async () => {
            try {
                const response = await fetch('/api/get_chat/');
                if (response.ok) {
                    const data = await response.json();
                    setChat(data);
                } else {
                    throw new Error('Error fetching chat data');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchChatData();
    }, []);

    return (
        <div>
            <pre>{JSON.stringify(chat, null, 2)}</pre>
        </div>
    );
};

export default ChatPage;