import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer';
import FollowersReducer from './FollowersReducer';

export default combineReducers({
  users: UsersReducer,
  followers: FollowersReducer
});
