import { combineReducers } from 'redux';
// import postsReducer from './posts/reducer';
import worklogs from './workLog/reducer';
import autoComment from './autocomment/reducer';
import home from './home/reducer';
import saveReducer from './save/reducer';

export default combineReducers({
  worklogs,
  autoComment,
  home,
  loggedDetails: saveReducer
});
