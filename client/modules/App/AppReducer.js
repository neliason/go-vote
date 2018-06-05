// Import Actions
import { TOGGLE_ADD_POLL, USER_LOGIN, USER_LOGOUT } from './AppActions';

// Initial State
const initialState = {
  showAddPoll: false,
  userAuthenticated: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POLL:
      return {
        ...state,
        showAddPoll: !state.showAddPoll,
      };

    case USER_LOGIN:
      return {
        ...state,
        userAuthenticated: true,
      };

    case USER_LOGOUT:
      return {
        ...state,
        userAuthenticated: false,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPoll
export const getShowAddPoll = state => state.app.showAddPoll;

export const getUserAuthenticated = state => state.app.userAuthenticated;

// Export Reducer
export default AppReducer;
