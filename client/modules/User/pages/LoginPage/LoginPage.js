import React from 'react';
import '../../user.css';

const LoginPage = () => {
  return (
    <div className="container">	
      <div className="login">
        <p className="vote-text">Go Vote</p>
        <a href="/auth/github">
          <div className="btn" id="login-btn">
            <img src="./img/github_32px.png" alt="github logo" />
            <p>LOGIN WITH GITHUB</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
