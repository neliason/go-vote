// Import Actions
import { TOGGLE_ADD_POLL } from './AppActions';

// Initial State
const initialState = {
  showAddPoll: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POLL:
      return {
        showAddPoll: !state.showAddPoll,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPoll
export const getShowAddPoll = state => state.app.showAddPoll;

// Export Reducer
export default AppReducer;
