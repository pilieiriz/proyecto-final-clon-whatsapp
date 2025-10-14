import { useState, useMemo, useEffect } from 'react';
import ContactsContext from './ContactsContext';

const CHAT_BACKGROUND_KEY = 'chatBackground';

const CONTACTS = [
    {
        id: 1,
        name: 'Diego',
        avatar: 'https://avatar.iran.liara.run/public/1',
        lastMessage: '¿Cómo estás?',
        lastMessageTime: '12:45',
        unread: 1,
        online: true,
        lastOnline: 'ahora',
    },
    {
        id: 2,
        name: 'Maria',
        avatar: 'https://avatar.iran.liara.run/public/2',
        lastMessage: 'Nos vemos mañana',
        lastMessageTime: '11:30',
        unread: 0,
        online: false,
        lastOnline: 'Ultima vez a las11:30',
    },
    {
        id: 3,
        name: 'Carlos',
        avatar: 'https://avatar.iran.liara.run/public/3',
        lastMessage: 'Perfecto, gracias!',
        lastMessageTime: '10:15',
        unread: 0,
        online: true,
        lastOnline: 'ahora',
    },
    {
        id: 4,
        name: 'Ale',
        avatar: 'https://avatar.iran.liara.run/public/4',
        lastMessage: '📸 Foto',
        lastMessageTime: 'Ayer',
        unread: 5,
        online: false,
        lastOnline: 'Ultima vez ayer a las 10:15',
    },
    {
        id: 5,
        name: 'Bauti',
        avatar: 'https://avatar.iran.liara.run/public/5',
        lastMessage: 'Hasta luego!',
        lastMessageTime: 'Ayer',
        unread: 0,
        online: true,
        lastOnline: 'ahora',
    },
    {
        id: 6,
        name: 'Rodolfo',
        avatar: 'https://avatar.iran.liara.run/public/6',
        lastMessage: 'Claro, sin problema',
        lastMessageTime: '15/10',
        unread: 0,
        online: false,
        lastOnline: 'Ultima vez el 15/10 a las 15:00',
    },
    {
        id: 7,
        name: 'Pedro',
        avatar: 'https://avatar.iran.liara.run/public/7',
        lastMessage: 'Te envío los documentos',
        lastMessageTime: '14/10',
        unread: 1,
        online: true,
        lastOnline: 'ahora',
    },
    {
        id: 8,
        name: 'Miguel',
        avatar: 'https://avatar.iran.liara.run/public/9',
        lastMessage: 'Excelente!',
        lastMessageTime: '13/10',
        unread: 0,
        online: true,
        lastOnline: 'ahora',
    },
];

const MESSAGES = {
    1: [
        { id: 1, text: 'Hola! ¿Cómo estás?', time: '12:30', sent: false },
        { id: 2, text: 'Muy bien, gracias! ¿Y tú?', time: '12:32', sent: true },
        { id: 3, text: '¿Cómo estás?', time: '12:45', sent: false },
    ],
    2: [
        { id: 1, text: 'Nos vemos mañana en la reunión', time: '11:28', sent: false },
        { id: 2, text: 'Perfecto, ahí estaré', time: '11:29', sent: true },
        { id: 3, text: 'Nos vemos mañana', time: '11:30', sent: false },
    ],
    3: [
        { id: 1, text: 'Te envié la información por email', time: '10:10', sent: true },
        { id: 2, text: 'La recibí, muchas gracias', time: '10:12', sent: false },
        { id: 3, text: 'Perfecto, gracias!', time: '10:15', sent: false },
    ],
    4: [
        { id: 1, text: 'Mira esta foto que tomé', time: 'Ayer', sent: false },
        { id: 2, text: '📸 Foto', time: 'Ayer', sent: false },
    ],
    5: [
        { id: 1, text: 'Hablamos luego', time: 'Ayer', sent: true },
        { id: 2, text: 'Hasta luego!', time: 'Ayer', sent: false },
    ],
    6: [
        { id: 1, text: '¿Puedes ayudarme con esto?', time: '15/10', sent: false },
        { id: 2, text: 'Claro, sin problema', time: '15/10', sent: false },
    ],
    7: [
        { id: 1, text: 'Necesito los documentos del proyecto', time: '14/10', sent: true },
        { id: 2, text: 'Te envío los documentos', time: '14/10', sent: false },
    ],
    8: [
        { id: 1, text: 'El proyecto quedó muy bien', time: '13/10', sent: false },
        { id: 2, text: 'Excelente!', time: '13/10', sent: false },
    ],
};

const ContactsProvider = ({ children }) => {
    const [contacts] = useState(CONTACTS);
    const [messages, setMessages] = useState(MESSAGES);
    const [activeContactId, setActiveContactId] = useState(null);
    const [chatBackground, setChatBackgroundState] = useState('default');

    const activeContact = contacts.find(contact => contact.id === activeContactId);

    const activeMessages = useMemo(() => {
        return messages[activeContactId] || [];
    }, [messages, activeContactId]);

    const sendMessage = (contactId, text) => {
        const newMessage = {
            id: Date.now(),
            text,
            time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
            sent: true,
        };

        setMessages(prev => ({
            ...prev,
            [contactId]: [...(prev[contactId] || []), newMessage],
        }));
    };

    const setChatBackground = (bgId) => {
        setChatBackgroundState(bgId);
        localStorage.setItem(CHAT_BACKGROUND_KEY, bgId);
    };

    useEffect(() => {
        const savedBackground = localStorage.getItem(CHAT_BACKGROUND_KEY);
        if (savedBackground) {
            setChatBackgroundState(savedBackground);
        }
    }, []);

    const value = useMemo(() => ({
        contacts,
        activeContact,
        activeContactId,
        setActiveContactId,
        activeMessages,
        sendMessage,
        chatBackground,
        setChatBackground,
    }), [contacts, activeContact, activeContactId, activeMessages, chatBackground]);

    return (
        <ContactsContext.Provider value={value}>
            {children}
        </ContactsContext.Provider>
    );
};

export default ContactsProvider;

