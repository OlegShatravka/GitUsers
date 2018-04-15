import axios from 'axios';

import {
  LOAD_FOLLOWERS,
  LOAD_FOLLOWERS_SUCCESS,
  LOAD_FOLLOWERS_FAIL,
  RESET_FOLLOWERS,
  ALL_FOLLOWERS_LOADED,
  FOLLOWERS_PER_PAGE_QUANTITY
} from '../constants';

export const loadFollowers = ({ followersUrl }) => dispatch => {
  dispatch({ type: LOAD_FOLLOWERS, payload: followersUrl });
  axios
    .get(`${followersUrl}?per_page=${FOLLOWERS_PER_PAGE_QUANTITY}`)
    .then(response => {
      loadFollowersSuccess(dispatch, { followers: response.data, page: 1 });
    })
    .catch(error => loadFollowersFail(dispatch, error));
};

const loadFollowersSuccess = (dispatch, user) => {
  dispatch({
    type: LOAD_FOLLOWERS_SUCCESS,
    payload: user
  });
};

const loadFollowersFail = dispatch => {
  dispatch({
    type: LOAD_FOLLOWERS_FAIL
  });
};

const allFollowersLoaded = dispatch => {
  dispatch({
    type: ALL_FOLLOWERS_LOADED
  });
};

export const loadMoreFollowers = () => (dispatch, getState) => {
  const { followersUrl, page } = getState().followers;
  const pageToLoad = page + 1;
  axios
    .get(`${followersUrl}?per_page=${FOLLOWERS_PER_PAGE_QUANTITY}&page=${pageToLoad}`)
    .then(response => {
      if (response.data.length) {
        loadFollowersSuccess(dispatch, { followers: response.data, page: pageToLoad });
      } else {
        allFollowersLoaded(dispatch);
      }
    })
    .catch(error => loadFollowersFail(dispatch, error));
};

export function resetFollowers() {
  return {
    type: RESET_FOLLOWERS
  };
}
