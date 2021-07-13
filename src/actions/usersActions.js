import { SET_USERS, LOADING, ERROR } from "../types/usersTypes";

export const setUsers = (users) => (dispatch) => {
  dispatch({
    type: LOADING,
  });
  dispatch({
    type: SET_USERS,
    payload: users,
  });
};

export const setError = (error) => (dispatch) => {
  dispatch({
    type: ERROR,
    payload: error,
  });
};
