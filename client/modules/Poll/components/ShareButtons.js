import React from 'react';
import PropTypes from 'prop-types';
import styles from './PollListItem/PollListItem.css';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';

const ShareButtons = props =>
  <div>
    <FacebookShareButton
      url={props.url}
      quote={props.message}
      className={styles['share-button']}
    >
      <FacebookIcon
        size={props.size}
        round
      />
    </FacebookShareButton>
    <TwitterShareButton
      url={props.url}
      title={props.message}
      className={styles['share-button']}
    >
      <TwitterIcon
        size={props.size}
        round
      />
    </TwitterShareButton>
    <EmailShareButton
      url={props.url}
      subject={props.message}
      className={styles['share-button']}
    >
      <EmailIcon
        size={props.size}
        round
      />
    </EmailShareButton>
  </div>;

ShareButtons.propTypes = {
  size: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ShareButtons;
