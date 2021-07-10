import { createAction } from 'redux-actions';
import { SAVE_LOGS, SAVE_STATUS, UPDATE_SAVED_LOGS, RESET_SAVED_LOGS } from '../../constants';

export const saveLogs = createAction(SAVE_LOGS);
export const setSaveStatus = createAction(SAVE_STATUS);
export const updateSavedLogs = createAction(UPDATE_SAVED_LOGS);
export const resetSavedLogs = createAction(RESET_SAVED_LOGS);

