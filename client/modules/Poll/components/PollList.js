import React from 'react';
import PropTypes from 'prop-types';

// Import Components
import PollListItem from './PollListItem/PollListItem';

const PollList = props =>
  <div className="listView">
    {
      props.polls.map(poll => (
        <PollListItem
          poll={poll}
          key={poll.cuid}
          onDelete={() => props.handleDeletePoll(poll.cuid)}
        />
      ))
    }
  </div>;

PollList.propTypes = {
  polls: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    choices: PropTypes.arrayOf(PropTypes.string).isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeletePoll: PropTypes.func.isRequired,
};

export default PollList;
