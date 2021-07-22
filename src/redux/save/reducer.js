import { handleActions } from 'redux-actions';
import { resetSavedLogs, saveLogs, setSaveStatus, updateSavedLogs } from './action';

const DEFAULT_STATE = {
  savingInProgress: false,
  savedLogs: [],
};

const handlers = {
  [saveLogs]: (state) => ({ ...state, savingInProgress: true }),
  [setSaveStatus]: (state, action) => {
    const { inProgress } = action.payload;
    return {
      ...state,
      savingInProgress: inProgress,
    };
  },
  [updateSavedLogs]: (state, action) => {
    const { savedLogs } = action.payload;
    console.log('updateSavedLogs', savedLogs);
    return {
      ...state,
      savedLogs,
    };
  },
  [resetSavedLogs]: (state) => ({ ...state, saveLogs: [] }),
};

export default handleActions(handlers, DEFAULT_STATE);
