import { ADD_USER } from './UserActions';

const initialState = {};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER :
      return {
        ...state,
        currentUser: action.user,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get user
export const getUser = state => {
  return state.users.currentUser;
};

// Export Reducer
export default UserReducer;
