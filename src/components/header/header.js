import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCity } from '../../redux/actions';

import escapeHtml from '../../utils/escape-html';

import TimeContainer from '../time-container';

import styles from './header.module.scss';

function Header({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const inputValue = escapeHtml(event.target.value);
    setValue(inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <div className={styles['header']}>
      <div className={styles['header-time']}>
        <TimeContainer />
      </div>
      <div className={styles['header-form']}>
        <form onSubmit={handleSubmit} className="input-group">
          <input
            onChange={handleChange}
            placeholder="Enter city on English"
            type="search"
            className="form-control rounded"
            aria-label="Search"
          ></input>
          <button type="submit" className="btn btn-primary">
            Add New City
          </button>
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (value) => dispatch(addCity(value)),
});

export default connect(null, mapDispatchToProps)(Header);
