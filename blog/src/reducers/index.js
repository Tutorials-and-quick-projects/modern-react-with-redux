// want seperate files for each reducer
import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  // replaceMe: () => 316 initially just this to get it to run
  posts: postsReducer,
  users: usersReducer
});
