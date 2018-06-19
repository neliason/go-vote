import React from 'react';
import '../../user.css';

const LoginPage = () => {
  return (
    <div className="container">
      <div className="login">
        <p className="vote-text">Login</p>
        <a href="/auth/github">
          <div className="btn" id="login-btn">
            <i className="fab fa-github fa-lg github-icon"></i>
            LOGIN WITH GITHUB
          </div>
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
