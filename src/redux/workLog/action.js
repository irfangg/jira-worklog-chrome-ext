import { createAction } from 'redux-actions';
import { ADD_NEW_ROW, DELETE_ROW, EDIT_ACTION, FILTER_BY, RESET_STORE } from '../../constants';

export const addNewRow = createAction(ADD_NEW_ROW);
export const onEditIssue = createAction(EDIT_ACTION);
export const delRow = createAction(DELETE_ROW);
export const filterBy = createAction(FILTER_BY);

export const resetStore = createAction(RESET_STORE);
