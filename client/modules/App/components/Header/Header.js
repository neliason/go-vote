import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <Link to="/">Go-Vote</Link>
        </h1>
        {
          context.router.isActive('/', true)
            ? <a className={styles['add-poll-button']} href="#" onClick={props.toggleAddPoll}>Add Poll</a>
            : null
        }
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: PropTypes.object,
};

Header.propTypes = {
  toggleAddPoll: PropTypes.func.isRequired,
};

export default Header;
