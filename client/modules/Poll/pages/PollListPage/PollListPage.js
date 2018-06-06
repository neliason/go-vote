import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Components
import PollList from '../../components/PollList';
import PollCreateWidget from '../../components/PollCreateWidget/PollCreateWidget';

// Import Actions
import { addPollRequest, fetchPolls, deletePollRequest } from '../../PollActions';
import { toggleAddPoll } from '../../../App/AppActions';
import { fetchUser } from '../../../User/UserActions';

// Import Selectors
import { getShowAddPoll, getUserAuthenticated } from '../../../App/AppReducer';
import { getPolls } from '../../PollReducer';
import { getUser } from '../../../User/UserReducer';

class PollListPage extends Component {
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
    showAddPoll: PropTypes.bool.isRequired,
    userAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      id: PropTypes.string,
      username: PropTypes.string,
      displayName: PropTypes.string,
      publicRepos: PropTypes.number,
    }),
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.dispatch(fetchPolls());
    this.props.dispatch(fetchUser());
  }

  handleDeletePoll = poll => {
    if (confirm('Do you want to delete this poll')) { // eslint-disable-line
      this.props.dispatch(deletePollRequest(poll));
    }
  };

  handleAddPoll = (name, title, choices) => {
    this.props.dispatch(toggleAddPoll());
    this.props.dispatch(addPollRequest({ name, title, choices }));
  };

  render() {
    return (
      <div>
        <PollCreateWidget addPoll={this.handleAddPoll} showAddPoll={this.props.showAddPoll} user={this.props.user} />
        <PollList handleDeletePoll={this.handleDeletePoll} polls={this.props.polls} userAuthenticated={this.props.userAuthenticated} user={this.props.user} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
PollListPage.need = [() => { return fetchPolls(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPoll: getShowAddPoll(state),
    polls: getPolls(state),
    userAuthenticated: getUserAuthenticated(state),
    user: getUser(state),
  };
}

PollListPage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(PollListPage);
