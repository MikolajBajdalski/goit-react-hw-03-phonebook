import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
    static propTypes = {
        onAddContact: PropTypes.func.isRequired,
        contacts: PropTypes.array.isRequired,
    };

    state = {
        name: '',
        number: '',
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, number } = this.state;

        const isNameExist = this.props.contacts.some(
            contact => contact.name.toLowerCase() === name.toLowerCase()
        );

        if (isNameExist) {
            alert(`${name} is already in contacts.`);
            return;
        }

        if (name && number) {
            this.props.onAddContact(name, number);
            this.setState({ name: '', number: '' });
        }
    };

    render() {
        const { name, number } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <label className={styles.label}>
                    <p>Name</p>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleInputChange}
                        className={styles.input}
                        required
                    />
                </label>
                <label className={styles.label}>
                    <p>Number</p>
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        onChange={this.handleInputChange}
                        className={styles.input}
                        required
                    />
                </label>
                <button type="submit" className={styles.button}>Add contact</button>
            </form>
        );
    }
}

export default ContactForm;
