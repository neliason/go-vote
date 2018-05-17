import React from 'react';
import PropTypes from 'prop-types';
import '../../user.css';

const ProfilePage = (props) => {
  return (
    <div className="container">
      <div className="github-profile">
        <img src="/public/img/gh-mark-32px.png" alt="github logo" />
        <p><span>ID: </span><span id="profile-id" className="profile-value">{props.id}</span></p>
        <p><span>Username: </span><span id="profile-username" className="profile-value">{props.username}</span></p>
        <p><span>Display Name: </span><span id="display-name" className="profile-value">{props.displayName}</span></p>
        <p><span>Repositories: </span><span id="profile-repos" className="profile-value">{props.repositories}</span></p>
        <a className="menu" href="/">Home</a>
        <p id="menu-divide">|</p>
        <a className="menu" href="/logout">Logout</a>
      </div>
    </div>
  );
};

ProfilePage.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  repositories: PropTypes.array.isRequired,
};

export default ProfilePage;
