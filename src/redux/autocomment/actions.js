import { createAction } from 'redux-actions';
import { TOGGLE_AUTO_COMMENT } from '../../constants';

export const toggleAutoComment = createAction(TOGGLE_AUTO_COMMENT);