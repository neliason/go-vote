import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PollList from '../../components/PollList';
import { fetchMyPolls, deletePollRequest } from '../../PollActions';
import { fetchUser } from '../../../User/UserActions';
import { getUserAuthenticated } from '../../../App/AppReducer';
import { getPolls } from '../../PollReducer';
import { getUser } from '../../../User/UserReducer';

class MyPollsPage extends Component {

  static propTypes = {
    polls: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      choices: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        votes: PropTypes.number.isRequired,
      })).isRequired,
      slug: PropTypes.string.isRequired,
      cuid: PropTypes.string.isRequired,
      dateAdded: PropTypes.string.isRequired,
    })).isRequired,
    dispatch: PropTypes.func.isRequired,
    userAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      publicRepos: PropTypes.number.isRequired,
    }).isRequired,
  }

  componentDidMount() {
    this.props.dispatch(fetchMyPolls());
    this.props.dispatch(fetchUser());
  }

  handleDeletePoll = poll => {
    if (confirm('Do you want to delete this poll')) { // eslint-disable-line
      this.props.dispatch(deletePollRequest(poll));
    }
  };

  render() {
    return (
      <div>
        <PollList
          polls={this.props.polls}
          handleDeletePoll={this.handleDeletePoll}
          userAuthenticated={this.props.userAuthenticated}
          user={this.props.user}
        />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
// MyPollsPage.need = [() => { return fetchPolls(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    polls: getPolls(state),
    userAuthenticated: getUserAuthenticated(state),
    user: getUser(state),
  };
}

MyPollsPage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(MyPollsPage);
