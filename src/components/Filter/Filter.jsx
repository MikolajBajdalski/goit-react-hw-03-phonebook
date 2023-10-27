import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
        <div className={styles.filter}>
            <p className='test'>Find contacts by name</p>
            <input
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
                className={styles.input}
            />
        </div>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;
