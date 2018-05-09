import { ADD_POLL, ADD_POLLS, DELETE_POLL, VOTE_ON_POLL } from './PollActions';

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

    case VOTE_ON_POLL : {
      const newData = state.data.map((poll) => {
        if (poll.cuid === action.cuid) {
          const newChoices = poll.choices;
          newChoices[action.indexOfChoice].votes += 1;
          console.log('newChoices', newChoices);
          return {
            ...poll,
            choices: newChoices,
          };
        }
        return poll;
      });
      return {
        data: newData,
      };
    }

    default:
      return state;
  }
};

/* Selectors */

// Get all polls
export const getPolls = state => {
  console.log('here');
  return state.polls.data;
};

// Get poll by cuid
export const getPoll = (state, cuid) => state.polls.data.filter(poll => poll.cuid === cuid)[0];

// Export Reducer
export default PollReducer;
