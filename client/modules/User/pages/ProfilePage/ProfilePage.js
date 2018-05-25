import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../user.css';

import { fetchUser } from '../../UserActions';

import { getUser } from '../../UserReducer';


class ProfilePage extends Component {

  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      publicRepos: PropTypes.number.isRequired,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(fetchUser());
  }

  render() {
    return (
      <div className="container">
        <div className="github-profile">
          <p><span>ID: </span><span id="profile-id" className="profile-value">{this.props.user.id}</span></p>
          <p><span>Username: </span><span id="profile-username" className="profile-value">{this.props.user.username}</span></p>
          <p><span>Display Name: </span><span id="display-name" className="profile-value">{this.props.user.displayName}</span></p>
          <p><span>Repositories: </span><span id="profile-repos" className="profile-value">{this.props.user.publicRepos}</span></p>
          <a className="menu" href="/">Home</a>
          <p id="menu-divide">|</p>
          <a className="menu" href="/logout">Logout</a>
        </div>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
ProfilePage.need = [() => { return fetchUser(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    user: getUser(state),
  };
}

export default connect(mapStateToProps)(ProfilePage);
