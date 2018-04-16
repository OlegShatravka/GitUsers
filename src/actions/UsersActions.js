import axios from 'axios';

import {
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAIL,
  ALL_USERS_LOADED,
  LOAD_MORE_USERS,
  USERS_PER_PAGE_QUANTITY
} from '../constants';

export const loadUsers = () => dispatch => {
  dispatch({ type: LOAD_USERS });
  axios
    .get(`https://api.github.com/users?per_page=${USERS_PER_PAGE_QUANTITY}`)
    .then(response => {
      loadUsersSuccess(dispatch, { users: response.data });
    })
    .catch(error => loadUsersFail(dispatch, { error }));
};

const loadUsersSuccess = (dispatch, users) => {
  dispatch({
    type: LOAD_USERS_SUCCESS,
    payload: users
  });
};

const loadUsersFail = (dispatch, error) => {
  dispatch({
    type: LOAD_USERS_FAIL,
    payload: error
  });
};

const allUsersLoaded = dispatch => {
  dispatch({
    type: ALL_USERS_LOADED
  });
};

export const loadMoreUsers = () => (dispatch, getState) => {
  dispatch({ type: LOAD_MORE_USERS });
  const { users } = getState().users;
  const since = users[users.length - 1].id;
  axios
    .get(`https://api.github.com/users?since=${since}&per_page=${USERS_PER_PAGE_QUANTITY}`)
    .then(response => {
      if (response.data.length) {
        loadUsersSuccess(dispatch, { users: response.data });
      } else {
        allUsersLoaded(dispatch);
      }
    })
    .catch(error => loadUsersFail(dispatch, { error }));
};
