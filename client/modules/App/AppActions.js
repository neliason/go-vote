import callApi from '../../util/apiCaller';

// Export Constants
export const TOGGLE_ADD_POLL = 'TOGGLE_ADD_POLL';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

const jsonEmpty = (json) => {
  return Object.keys(json).length === 0 && json.constructor === Object;
};

// Export Actions
export function toggleAddPoll() {
  return {
    type: TOGGLE_ADD_POLL,
  };
}

export function userLogin() {
  return {
    type: USER_LOGIN,
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT,
  };
}

export function checkUserAuthStatus() {
  return (dispatch) => {
    return callApi('user').then(res => {
      console.log('res', res)
      if (jsonEmpty(res)) {
        dispatch(userLogout());
      } else {
        dispatch(userLogin());
      }
    });
  };
}
