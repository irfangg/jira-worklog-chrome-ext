import { all, takeLatest, call, put, select } from 'redux-saga/effects';
import { putError } from '../home/action';

import { resetSavedLogs, saveLogs, setSaveStatus, updateSavedLogs } from './action';

function* postWorkLog(issues) {
  const domain = yield select((state) => state.home.domain);
  let promiseArray =
    issues &&
    Array.isArray(issues) &&
    issues
      .filter((issue) => issue.issue)
      .map((issue) => {
        const logDate = issue.logDate.split('-');
        const bodyData = `{
            "timeSpent": "${issue.timeSpent}",
            "comment": {
              "type": "doc",
              "version": 1,
              "content": [
                {
                  "type": "paragraph",
                  "content": [
                    {
                      "text": "${issue.comment}",
                      "type": "text"
                    }
                  ]
                }
              ]
            },
            "started":  "${logDate[0]}-${logDate[1]}-${logDate[2]}T18:00:00.751+0000"
        }`;

        return fetch(`https://${domain}/rest/api/3/issue/${issue.issue}/worklog`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: bodyData,
        })
          .then((response) => {
            // console.log(
            // `Response: ${response.status}`
            // );
            return response.json();
          })
          .then((data) => {
            //console.log(data, data?.self)
            return { issue: issue.issue, data };
          })
          .catch((err) => {
            return { issue: issue.issue, data: '', error: err };
          });
      });

  return promiseArray;
}

export function* saveAllLogs(action) {
  try {
    yield put(resetSavedLogs());
    yield put(putError({ error: '' }));
    const promises = yield call(postWorkLog, action.payload);
    console.log('promises ', promises);
    const data = yield Promise.allSettled(promises)
      .then((results) => {
        console.log('Promise results ', results);
        return results;
      })
      .catch((err) => {
        return err;
      });
    console.log('final data ', data);
    yield put(updateSavedLogs({ savedLogs: data }));
    yield put(setSaveStatus({ inProgress: false }));
  } catch (err) {
    yield put(setSaveStatus({ inProgress: false }));
    //put some error
    yield put(putError({ error: 'something went wrong, try submiting again with correct data.' }));
    console.log('erro in saga ', err);
  }
}

export default function* saveLogsSaga() {
  yield all([takeLatest(saveLogs, saveAllLogs)]);
}
