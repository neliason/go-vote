import React from 'react';
import styles from './loginPage.css';

const LoginPage = () => {
  return (
    <div className={styles.login} >
      <p className={styles['login-text']}>Login to Go-Vote</p>
      <a href="/auth/github">
        <div className={`btn ${styles['login-btn']}`}>
          <i className={`fab fa-github fa-lg ${styles['github-icon']}`}></i>
          Login with GitHub
        </div>
      </a>
    </div>
  );
};

export default LoginPage;
