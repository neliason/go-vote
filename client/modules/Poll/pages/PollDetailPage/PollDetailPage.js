import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Button } from 'react-bootstrap';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon } from 'react-share';
import Cookies from 'js-cookie';

import PollChart from '../../components/PollChart';

// Import Style
import styles from '../../components/PollListItem/PollListItem.css';

// Import Actions
import { fetchPoll, voteOnPollRequest } from '../../PollActions';
import { fetchUser } from '../../../User/UserActions';

// Import Selectors
import { getPoll } from '../../PollReducer';
import { getUserAuthenticated } from '../../../App/AppReducer';

class PollDetailPage extends Component {

  static propTypes = {
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
    userAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(fetchUser());
  }

  handleVote = (cuid, indexOfChoice) => {
    if (!this.props.userAuthenticated) {
      const pollsVotedOnCookie = Cookies.get('pollsVotedOn');
      let pollsVotedOn = [];
      if (pollsVotedOnCookie) {
        pollsVotedOn = JSON.parse(pollsVotedOnCookie);
      }
      if (pollsVotedOn.includes(cuid)) {
        alert('User already voted');
        return;
      }
      pollsVotedOn.push(cuid);
      Cookies.set('pollsVotedOn', pollsVotedOn);
    }
    this.props.dispatch(voteOnPollRequest(cuid, indexOfChoice));
  }

  render() {
    return (
      <div className={styles['poll-and-chart']}>
        <Helmet title={this.props.poll.title} />
        <div className={`${styles['single-poll']} ${styles['poll-detail']}`}>
          <h3 className={styles['poll-title']}>{this.props.poll.title}</h3>
          <p className={styles['author-name']}>by {this.props.poll.name}</p>
          {this.props.poll.choices.map((choice, index) =>
            <p className={styles['poll-option']} key={index}>
              <Button onClick={() => this.handleVote(this.props.poll.cuid, index)}>{choice.name}: {choice.votes}</Button>
            </p>
          )}
          <FacebookShareButton
            url={window.location.href}
            quote={`${this.props.poll.title} | go-vote`}
            className={styles['share-button']}
          >
            <FacebookIcon
              size={26}
              round
            />
          </FacebookShareButton>
          <TwitterShareButton
            url={window.location.href}
            title={`${this.props.poll.title} | go-vote`}
            className={styles['share-button']}
          >
            <TwitterIcon
              size={26}
              round
            />
          </TwitterShareButton>
          <EmailShareButton
            url={window.location.href}
            subject={`${this.props.poll.title} | go-vote`}
            className={styles['share-button']}
          >
            <EmailIcon
              size={26}
              round
            />
          </EmailShareButton>
        </div>
        <div className={styles['poll-chart']}>
          <PollChart choices={this.props.poll.choices} />
        </div>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in server side.
PollDetailPage.need = [params => {
  return fetchPoll(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    poll: getPoll(state, props.params.cuid),
    userAuthenticated: getUserAuthenticated(state),
  };
}

export default connect(mapStateToProps)(PollDetailPage);
