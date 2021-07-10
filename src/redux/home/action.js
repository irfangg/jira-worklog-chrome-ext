import { createAction } from 'redux-actions';
import { PUT_ERROR, SAVE_DOMAIN } from '../../constants';

export const saveDomain = createAction(SAVE_DOMAIN);
export const putError = createAction(PUT_ERROR);