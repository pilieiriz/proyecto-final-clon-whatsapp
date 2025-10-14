import { useContext } from 'react';
import ContactsContext from '../ContactsContext';

const useContacts = () => {
    const context = useContext(ContactsContext);

    if (context === undefined) {
        throw new Error('useContacts debe usarse dentro de ContactsProvider');
    }

    return context;
};

export default useContacts;

