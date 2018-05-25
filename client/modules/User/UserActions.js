import callApi from '../../util/apiCaller';

export const ADD_USER = 'ADD_USER';

export function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}

export function fetchUser() {
  return (dispatch) => {
    return callApi('user').then(res => dispatch(addUser(res)));
  };
}
