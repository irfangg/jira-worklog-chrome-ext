import { all } from 'redux-saga/effects';
import saveLogsSaga from './save/saga';

function* rootSaga() {
  yield all([saveLogsSaga()]);
}

export default rootSaga;  
