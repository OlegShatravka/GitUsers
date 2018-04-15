import { LOAD_USERS, LOAD_USERS_SUCCESS, LOAD_USERS_FAIL, ALL_USERS_LOADED } from '../constants';

const INITIAL_STATE = { users: [], loading: false, error: '', allUsersLoaded: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return { ...state, loading: true };
    case LOAD_USERS_SUCCESS:
      return { ...state, users: [...state.users, ...action.payload], loading: false };
    case LOAD_USERS_FAIL:
      return { ...state, error: action.payload, loading: false };
    case ALL_USERS_LOADED:
      return { ...state, allUsersLoaded: true };

    default:
      return state;
  }
};
