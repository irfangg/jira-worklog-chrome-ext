import { createAction } from 'redux-actions';
import { TOGGLE_AUTO_COMMENT, TOGGLE_INCLUDE_TASK, TOGGLE_SHOW_TASK } from '../../constants';

export const toggleAutoComment = createAction(TOGGLE_AUTO_COMMENT);
export const toggleShowTask = createAction(TOGGLE_SHOW_TASK);