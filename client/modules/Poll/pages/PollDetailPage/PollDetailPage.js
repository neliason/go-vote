import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

// Import Style
import styles from '../../components/PollListItem/PollListItem.css';

// Import Actions
import { fetchPoll } from '../../PollActions';

// Import Selectors
import { getPoll } from '../../PollReducer';

// TODO: display graph and allow voting
export function PollDetailPage(props) {
  return (
    <div>
      <Helmet title={props.poll.title} />
      <div className={`${styles['single-poll']} ${styles['poll-detail']}`}>
        <h3 className={styles['poll-title']}>{props.poll.title}</h3>
        <p className={styles['author-name']}>by {props.poll.name}</p>
        {props.poll.choices.map((choice, index) =>
          <p className={styles['poll-option']} key={index}><a href='#' onClick={props.onVote}>{choice.name}: {choice.votes}</a></p>
        )}
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
PollDetailPage.need = [params => {
  return fetchPoll(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    poll: getPoll(state, props.params.cuid),
  };
}

PollDetailPage.propTypes = {
  poll: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    choices: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
    })).isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(PollDetailPage);
