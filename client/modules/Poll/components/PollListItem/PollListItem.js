import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

// Import Style
import styles from './PollListItem.css';

const PollListItem = props =>
  <div className={styles['single-poll']}>
    <h3 className={styles['poll-title']}>
      <Link to={`/polls/${props.poll.slug}-${props.poll.cuid}`} >
        {props.poll.title}
      </Link>
    </h3>
    <p className={styles['author-name']}>by {props.poll.name}</p>
    {props.poll.choices.map((choice, index) =>
      <p className={styles['poll-option']} key={index}>{choice.name}: {choice.votes}</p>
    )}
    {
      props.userAuthenticated && props.poll.name === props.user.username ?
        <p className={styles['poll-action']}><a href="#" onClick={props.onDelete}>Delete Poll</a></p>
      :
        null
    }
    <hr className={styles.divider} />
  </div>;


PollListItem.propTypes = {
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
  onDelete: PropTypes.func.isRequired,
  userAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    publicRepos: PropTypes.number.isRequired,
  }),
};

export default PollListItem;
