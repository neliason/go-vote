import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PollList from '../../components/PollList';
import { fetchMyPolls, deletePollRequest, fetchPolls } from '../../PollActions';
import { getPolls } from '../../PollReducer';

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
  }

  componentDidMount() {
    this.props.dispatch(fetchMyPolls());
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
        />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
MyPollsPage.need = [() => { return fetchPolls(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    polls: getPolls(state),
  };
}

MyPollsPage.contextTypes = {
  router: PropTypes.object,
};

export default connect(mapStateToProps)(MyPollsPage);
