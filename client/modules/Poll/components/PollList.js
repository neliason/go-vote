import React from 'react';
import PropTypes from 'prop-types';

// Import Components
import PollListItem from './PollListItem/PollListItem';

const PollList = props =>
  <div className="listView">
    {
      props.polls.map((poll, index, arr) => (
        <PollListItem
          poll={poll}
          key={poll.cuid}
          onDelete={() => props.handleDeletePoll(poll.cuid)}
          userAuthenticated={props.userAuthenticated}
          user={props.user}
          isMyPolls={props.isMyPolls}
          isLastPoll={index === arr.length - 1}
        />
      ))
    }
  </div>;

PollList.propTypes = {
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
  handleDeletePoll: PropTypes.func.isRequired,
  userAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    displayName: PropTypes.string,
    publicRepos: PropTypes.number,
  }),
  isMyPolls: PropTypes.bool,
};

export default PollList;
