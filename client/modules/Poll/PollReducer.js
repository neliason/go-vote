import { ADD_POLL, ADD_POLLS, DELETE_POLL } from './PollActions';

// Initial State
const initialState = { data: [] };

const PollReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POLL :
      return {
        data: [action.poll, ...state.data],
      };

    case ADD_POLLS :
      return {
        data: action.polls,
      };

    case DELETE_POLL :
      return {
        data: state.data.filter(poll => poll.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all polls
export const getPolls = state => {
  console.log('in getPolls');
  return state.polls.data;
};

// Get poll by cuid
export const getPoll = (state, cuid) => state.polls.data.filter(poll => poll.cuid === cuid)[0];

// Export Reducer
export default PollReducer;
