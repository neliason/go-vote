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
    <p className={styles['poll-option']}>{props.poll.choices[0]}</p>
    <p className={styles['poll-option']}>{props.poll.choices[1]}</p>
    <p className={styles['poll-action']}><a href="#" onClick={props.onDelete}>Delete Poll</a></p>
    <hr className={styles.divider} />
  </div>;


PollListItem.propTypes = {
  poll: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    choices: PropTypes.arrayOf(PropTypes.string).isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PollListItem;
