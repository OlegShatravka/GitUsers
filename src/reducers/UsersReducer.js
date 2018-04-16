import {
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAIL,
  ALL_USERS_LOADED,
  LOAD_MORE_USERS
} from '../constants';

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: '',
  allUsersLoaded: false,
  showLoadMoreUsersSpinner: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return { ...state, loading: true };
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: [...state.users, ...action.payload.users],
        loading: false,
        showLoadMoreUsersSpinner: false
      };
    case LOAD_USERS_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        showLoadMoreUsersSpinner: false
      };
    case ALL_USERS_LOADED:
      return { ...state, allUsersLoaded: true, showLoadMoreUsersSpinner: false };
    case LOAD_MORE_USERS: {
      return { ...state, showLoadMoreUsersSpinner: true };
    }

    default:
      return state;
  }
};
