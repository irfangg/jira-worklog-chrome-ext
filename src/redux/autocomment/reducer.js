import { handleActions } from 'redux-actions';
import { toggleAutoComment } from './actions';

const DEFAULT_STATE = {
    autoComment: false
};

const handlers = {
  [toggleAutoComment]: state => {  
    return {
      ...state,
      autoComment : !state.autoComment
    };
  },
};

export default handleActions(handlers, DEFAULT_STATE);
