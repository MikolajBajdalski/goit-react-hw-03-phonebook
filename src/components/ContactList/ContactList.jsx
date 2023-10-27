import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul>
            {filteredContacts.map(contact => (
                <ContactListItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
