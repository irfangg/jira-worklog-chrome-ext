import { handleActions } from 'redux-actions';
import { putError, saveDomain } from './action';

const DEFAULT_STATE = {
    domain: '',
    error: ''
};

const handlers = {
  [saveDomain]: (state, action) => {  
    const { domain } = action.payload;
    return {
      ...state,
      domain : domain
    };
  },
  [putError]: (state, action) => {
      const {error} = action.payload;
      return {
        ...state,
        error,
      }
  }
};

export default handleActions(handlers, DEFAULT_STATE);