import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Button } from 'react-bootstrap';
import Cookies from 'js-cookie';
import PollChart from '../../components/PollChart';
import ShareButtons from '../../components/ShareButtons';

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

  state = {
    selectedIndex: null,
  };

  componentDidMount() {
    this.props.dispatch(fetchUser());
  }

  handleVote = (cuid, indexOfChoice) => {
    if (this.state.selectedIndex === null) {
      alert('Please select an option');
      return;
    }
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

  handleSelected = (index) => {
    this.setState({
      selectedIndex: index,
    });
  }

  render() {
    return (
      <div className={styles['poll-detail-page']}>
        <Helmet title={this.props.poll.title} />
        <h3 className={styles['poll-title']}>{this.props.poll.title}</h3>
        <p className={styles['author-name']}>by {this.props.poll.name}</p>
        <div className={styles['poll-and-chart']}>
          <div className={`${styles['single-poll']} ${styles['poll-detail']}`}>
            {this.props.poll.choices.map((choice, index) =>
              <div className={styles['input-group']} key={choice._id}>
                <input
                  id={`radio${index}`}
                  name="radio"
                  type="radio"
                  checked={index === this.state.selectedIndex}
                  onClick={() => this.handleSelected(index)}
                />
                <label htmlFor={`radio${index}`}>
                  {choice.name}
                  <span className={styles['num-votes-text']}>
                    <i> {choice.votes} {choice.votes === 1 ? 'vote' : 'votes'}</i>
                  </span>
                </label>
              </div>
            )}
            <div className={styles['detail-submit-and-share-btns']}>
              <Button className={`btn ${styles['submit-btn']}`} onClick={() => this.handleVote(this.props.poll.cuid, this.state.selectedIndex)}>Submit</Button>
              <ShareButtons
                className={styles['share-btns']}
                size={30}
                url={`${process.env.BASE_URL}/polls/${this.props.poll.slug}-${this.props.poll.cuid}`}
                message={`${this.props.poll.title} | go-vote`}
              />
            </div>
          </div>
          <div className={styles['poll-chart']}>
            <PollChart choices={this.props.poll.choices} />
          </div>
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
