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
          {props.userAuthenticated ?
            <span>
              <li>
                <a href="/mypolls">My Polls</a>
              </li>
              <li>
                <a href="/profile">Profile</a>
              </li>
            </span>
          :
            null
          }
          <li>
            {props.userAuthenticated ?
              <a href="/logout">Logout</a>
            :
              <Link to="/login">Login</Link>
            }
          </li>
        </ul>
      </div>
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <Link to="/">Go-Vote</Link>
        </h1>
        {
          context.router.isActive('/', true) && props.userAuthenticated
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
  userAuthenticated: PropTypes.bool.isRequired,
};

export default Header;
