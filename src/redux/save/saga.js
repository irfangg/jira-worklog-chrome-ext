import { all, takeLatest, call, put, select, delay } from 'redux-saga/effects';
import { putError } from '../home/action';

import { resetSavedLogs, saveLogs, setSaveStatus, updateSavedLogs } from './action';
const savedLogs = [
    {
        "status": "fulfilled",
        "value": {
            "issue": "BTD-12",
            "data": {
                "self": "https://irfangg.atlassian.net/rest/api/3/issue/10011/worklog/10085",
                "author": {
                    "self": "https://irfangg.atlassian.net/rest/api/3/user?accountId=60ce033ea1746300706619d6",
                    "accountId": "60ce033ea1746300706619d6",
                    "emailAddress": "irfangg.contact@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png"
                    },
                    "displayName": "Irfan GG",
                    "active": true,
                    "timeZone": "Asia/Calcutta",
                    "accountType": "atlassian"
                },
                "updateAuthor": {
                    "self": "https://irfangg.atlassian.net/rest/api/3/user?accountId=60ce033ea1746300706619d6",
                    "accountId": "60ce033ea1746300706619d6",
                    "emailAddress": "irfangg.contact@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png"
                    },
                    "displayName": "Irfan GG",
                    "active": true,
                    "timeZone": "Asia/Calcutta",
                    "accountType": "atlassian"
                },
                "comment": {
                    "type": "doc",
                    "version": 1,
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "text": "worked on issue BTD-12",
                                    "type": "text"
                                }
                            ]
                        }
                    ]
                },
                "created": "2021-07-10T16:32:26.952+0530",
                "updated": "2021-07-10T16:32:26.952+0530",
                "started": "2021-07-10T23:30:00.751+0530",
                "timeSpent": "3h",
                "timeSpentSeconds": 10800,
                "id": "10085",
                "issueId": "10011"
            }
        }
    },
    {
        "status": "fulfilled",
        "value": {
            "issue": "BTD-13",
            "data": {
                "self": "https://irfangg.atlassian.net/rest/api/3/issue/10012/worklog/10086",
                "author": {
                    "self": "https://irfangg.atlassian.net/rest/api/3/user?accountId=60ce033ea1746300706619d6",
                    "accountId": "60ce033ea1746300706619d6",
                    "emailAddress": "irfangg.contact@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png"
                    },
                    "displayName": "Irfan GG",
                    "active": true,
                    "timeZone": "Asia/Calcutta",
                    "accountType": "atlassian"
                },
                "updateAuthor": {
                    "self": "https://irfangg.atlassian.net/rest/api/3/user?accountId=60ce033ea1746300706619d6",
                    "accountId": "60ce033ea1746300706619d6",
                    "emailAddress": "irfangg.contact@gmail.com",
                    "avatarUrls": {
                        "48x48": "https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png",
                        "24x24": "https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png",
                        "16x16": "https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png",
                        "32x32": "https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png"
                    },
                    "displayName": "Irfan GG",
                    "active": true,
                    "timeZone": "Asia/Calcutta",
                    "accountType": "atlassian"
                },
                "comment": {
                    "type": "doc",
                    "version": 1,
                    "content": [
                        {
                            "type": "paragraph",
                            "content": [
                                {
                                    "text": "worked on issue BTD-13",
                                    "type": "text"
                                }
                            ]
                        }
                    ]
                },
                "created": "2021-07-10T16:32:26.959+0530",
                "updated": "2021-07-10T16:32:26.959+0530",
                "started": "2021-07-10T23:30:00.751+0530",
                "timeSpent": "1m",
                "timeSpentSeconds": 60,
                "id": "10086",
                "issueId": "10012"
            }
        }
    },
    {
        "status": "fulfilled",
        "value": {
            "issue": "BTD-10",
            "data": {
                "errorMessages": [
                    "Worklog must not be null."
                ],
                "errors": {
                    "timeLogged": "Invalid time duration entered."
                }
            }
        }
    },
    {
        "status": "fulfilled",
        "value": {
            "issue": "BTD-2",
            "data": {
                "errorMessages": [
                    "Worklog must not be null."
                ],
                "errors": {
                    "timeLogged": "You must indicate the time spent working."
                }
            }
        }
    },
    {
        "status": "fulfilled",
        "value": {
            "issue": "Bjhg",
            "data": {
                "errorMessages": [
                    "Issue does not exist or you do not have permission to see it."
                ],
                "errors": {}
            }
        }
    },
    {
        "status": "fulfilled",
        "value": {
            "issue": "Bjhg",
            "data": {
                "errorMessages": [
                    "Issue does not exist or you do not have permission to see it."
                ],
                "errors": {}
            }
        }
    },
    {
        "status": "fulfilled",
        "value": {
            "issue": "Bjhg",
            "data": {
                "errorMessages": [
                    "Issue does not exist or you do not have permission to see it."
                ],
                "errors": {}
            }
        }
    },
    {
        "status": "fulfilled",
        "value": {
            "issue": "Bjhg",
            "data": {
                "errorMessages": [
                    "Issue does not exist or you do not have permission to see it."
                ],
                "errors": {}
            }
        }
    }
];

function *postWorkLog(issues){
    const domain = yield select(state => state.home.domain);
    let promiseArray = issues && Array.isArray(issues) && issues.filter((issue) => issue.issue).map((issue)=>{
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
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: bodyData
        })
        .then(response => {
            // console.log(
            // `Response: ${response.status}`
            // );
            return response.json();
        })
        .then(data => {
            //console.log(data, data?.self)
            return { issue:issue.issue, data};
        })
        .catch(err => {
            return { issue:issue.issue, data:'', error:err};
        });
    })

    return promiseArray;
}

export function* saveAllLogs(action) {
  try {
    yield put(resetSavedLogs());
    yield put(putError({error:''}));
    const promises = yield call(postWorkLog, action.payload);
    console.log('promises ',promises);
    const data = yield Promise.allSettled(promises)
    .then(results => {
        console.log('Promise results ', results)
        return results;
    })
    .catch(err => {
        return err;
    })
    console.log('final data ',data)
    yield put(updateSavedLogs({savedLogs: data}));
    yield put(setSaveStatus({inProgress:false}))
  } catch (err) {
    yield put(setSaveStatus({inProgress:false}))
    //put some error
    yield put(putError({error:'something went wrong, try submiting again with correct data.'}));
    console.log('erro in saga ', err);
  }
}

export default function* saveLogsSaga() {
  yield all([takeLatest(saveLogs, saveAllLogs)]);
}
