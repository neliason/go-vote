import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_POLL = 'ADD_POLL';
export const ADD_POLLS = 'ADD_POLLS';
export const DELETE_POLL = 'DELETE_POLL';
export const VOTE_ON_POLL = 'VOTE_ON_POLL';

// Export Actions
export function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll,
  };
}

export function addPollRequest(poll) {
  return (dispatch) => {
    return callApi('polls', 'post', {
      poll: {
        name: poll.name,
        title: poll.title,
        choices: poll.choices,
      },
    }).then(res => dispatch(addPoll(res.poll)));
  };
}

export function addPolls(polls) {
  return {
    type: ADD_POLLS,
    polls,
  };
}

export function fetchMyPolls() {
  return (dispatch) => {
    return callApi('mypolls').then(res => dispatch(addPolls(res.mypolls)));
  };
}

export function fetchPolls() {
  return (dispatch) => {
    return callApi('polls').then(res => {
      dispatch(addPolls(res.polls));
    });
  };
}

export function fetchPoll(cuid) {
  return (dispatch) => {
    return callApi(`polls/${cuid}`).then(res => dispatch(addPoll(res.poll)));
  };
}

export function deletePoll(cuid) {
  return {
    type: DELETE_POLL,
    cuid,
  };
}

export function deletePollRequest(cuid) {
  return (dispatch) => {
    return callApi(`polls/${cuid}`, 'delete').then(() => dispatch(deletePoll(cuid)));
  };
}

export function voteOnPoll(cuid, indexOfChoice) {
  return {
    type: VOTE_ON_POLL,
    cuid,
    indexOfChoice,
  };
}

export function voteOnPollRequest(cuid, indexOfChoice, userAuthenticated) {
  return (dispatch) => {
    return callApi(`polls/${cuid}/vote`, 'post', {
      indexOfChoice,
    }).then((res) => {
      if (res.message) {
        alert(res.message);
        return;
      }
      dispatch(voteOnPoll(cuid, indexOfChoice));
    });
  };
}
