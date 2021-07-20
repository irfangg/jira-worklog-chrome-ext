import { combineReducers } from 'redux';
// import postsReducer from './posts/reducer';
import worklogs from './workLog/reducer';
import options from './options/reducer';
import home from './home/reducer';
import saveReducer from './save/reducer';

export default combineReducers({
  worklogs,
  options,
  home,
  loggedDetails: saveReducer
});
