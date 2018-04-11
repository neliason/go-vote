import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_POLL = 'ADD_POLL';
export const ADD_POLLS = 'ADD_POLLS';
export const DELETE_POLL = 'DELETE_POLL';

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
        content: poll.content,
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
