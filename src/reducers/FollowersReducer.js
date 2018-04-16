import {
  LOAD_FOLLOWERS,
  LOAD_FOLLOWERS_SUCCESS,
  LOAD_FOLLOWERS_FAIL,
  ALL_FOLLOWERS_LOADED,
  RESET_FOLLOWERS,
  LOAD_MORE_FOLLOWERS
} from '../constants';

const INITIAL_STATE = {
  followers: [],
  loading: false,
  error: '',
  followersUrl: '',
  page: 0,
  allFollowersLoaded: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_FOLLOWERS:
      return { ...state, loading: true, followersUrl: action.payload.followersUrl };
    case LOAD_FOLLOWERS_SUCCESS:
      return {
        ...state,
        followers: [...state.followers, ...action.payload.followers],
        page: action.payload.page,
        loading: false,
        showLoadMoreFollowersSpinner: false
      };
    case LOAD_FOLLOWERS_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        showLoadMoreFollowersSpinner: false
      };
    case RESET_FOLLOWERS:
      return { ...INITIAL_STATE };
    case ALL_FOLLOWERS_LOADED:
      return { ...state, allFollowersLoaded: true, showLoadMoreFollowersSpinner: false };
    case LOAD_MORE_FOLLOWERS:
      return { ...state, showLoadMoreFollowersSpinner: true };

    default:
      return state;
  }
};
