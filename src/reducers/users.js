import { SET_USERS, LOADING, ERROR } from "../types/usersTypes";

const INITAL_STATE = {
  users: [],
  loading: false,
  error: "",
};

const userReducers = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload, loading: false };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return { ...state };
  }
};

export default userReducers;
