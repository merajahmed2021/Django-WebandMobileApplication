import { combineReducers } from 'redux';
// import leads from './leads';
// import errors from './errors';
// import messages from './messages';
import auth from './auth';
import posts from './post';

export default combineReducers({
  posts,
//   errors,
//   messages,
  auth,
});
