import { handleActions } from 'redux-actions';
import { toggleAutoComment, toggleShowTask } from './actions';

const DEFAULT_STATE = {
    autoComment: false,
    showTask: false
};

const handlers = {
  [toggleAutoComment]: state => {  
    return {
      ...state,
      autoComment : !state.autoComment
    };
  },
  [toggleShowTask]: state => {
    return {
      ...state,
      showTask : !state.showTask
    };
  }
};

export default handleActions(handlers, DEFAULT_STATE);
