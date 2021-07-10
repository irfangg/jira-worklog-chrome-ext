import { handleActions } from 'redux-actions';
import { resetSavedLogs, saveLogs, setSaveStatus, updateSavedLogs } from './action';

const DEFAULT_STATE = {
    savingInProgress: false,
    savedLogs: []
};

const handlers = {
  [saveLogs]: state => ({ ...state, savingInProgress: true }),
  [setSaveStatus]: (state, action) => {
    const {inProgress} = action.payload;
    return {
        ...state,
        savingInProgress: inProgress
    }
  },
  [updateSavedLogs]: (state, action) => {
    const {savedLogs} = action.payload;
    console.log('updateSavedLogs',savedLogs);
    return {
        ...state,
        savedLogs,
    }
  },
  [resetSavedLogs]: state => ({...state, saveLogs:[]})
};

export default handleActions(handlers, DEFAULT_STATE);

/*
{"self":"https://irfangg.atlassian.net/rest/api/3/issue/10011/worklog/10083","author":{"self":"https://irfangg.atlassian.net/rest/api/3/user?accountId=60ce033ea1746300706619d6","accountId":"60ce033ea1746300706619d6","emailAddress":"irfangg.contact@gmail.com","avatarUrls":{"48x48":"https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png","24x24":"https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png","16x16":"https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png","32x32":"https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png"},"displayName":"Irfan GG","active":true,"timeZone":"Asia/Calcutta","accountType":"atlassian"},"updateAuthor":{"self":"https://irfangg.atlassian.net/rest/api/3/user?accountId=60ce033ea1746300706619d6","accountId":"60ce033ea1746300706619d6","emailAddress":"irfangg.contact@gmail.com","avatarUrls":{"48x48":"https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png","24x24":"https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png","16x16":"https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png","32x32":"https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png"},"displayName":"Irfan GG","active":true,"timeZone":"Asia/Calcutta","accountType":"atlassian"},"comment":{"type":"doc","version":1,"content":[{"type":"paragraph","content":[{"text":"worked on issue BTD-12","type":"text"}]}]},"created":"2021-07-10T16:14:39.549+0530","updated":"2021-07-10T16:14:39.549+0530","started":"2021-07-10T23:30:00.751+0530","timeSpent":"3h","timeSpentSeconds":10800,"id":"10083","issueId":"10011"}
{"self":"https://irfangg.atlassian.net/rest/api/3/issue/10012/worklog/10084","author":{"self":"https://irfangg.atlassian.net/rest/api/3/user?accountId=60ce033ea1746300706619d6","accountId":"60ce033ea1746300706619d6","emailAddress":"irfangg.contact@gmail.com","avatarUrls":{"48x48":"https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png","24x24":"https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png","16x16":"https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png","32x32":"https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png"},"displayName":"Irfan GG","active":true,"timeZone":"Asia/Calcutta","accountType":"atlassian"},"updateAuthor":{"self":"https://irfangg.atlassian.net/rest/api/3/user?accountId=60ce033ea1746300706619d6","accountId":"60ce033ea1746300706619d6","emailAddress":"irfangg.contact@gmail.com","avatarUrls":{"48x48":"https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png","24x24":"https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png","16x16":"https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png","32x32":"https://secure.gravatar.com/avatar/9755e0ae438d4f875f951624dd0ece2e?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FIG-3.png"},"displayName":"Irfan GG","active":true,"timeZone":"Asia/Calcutta","accountType":"atlassian"},"comment":{"type":"doc","version":1,"content":[{"type":"paragraph","content":[{"text":"worked on issue BTD-13","type":"text"}]}]},"created":"2021-07-10T16:14:39.550+0530","updated":"2021-07-10T16:14:39.550+0530","started":"2021-07-10T23:30:00.751+0530","timeSpent":"1m","timeSpentSeconds":60,"id":"10084","issueId":"10012"}
*/
/*
{"errorMessages":["Worklog must not be null."],"errors":{"timeLogged":"Invalid time duration entered."}}
*/
/*
[
    {
        "status": "fulfilled",
        "value": {
            "issue": "BTD-12",
            "data": {
                "self": "https://irfangg.atlassian.net/rest/api/3/issue/10011/worklog/10083",
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
                "created": "2021-07-10T16:14:39.549+0530",
                "updated": "2021-07-10T16:14:39.549+0530",
                "started": "2021-07-10T23:30:00.751+0530",
                "timeSpent": "3h",
                "timeSpentSeconds": 10800,
                "id": "10083",
                "issueId": "10011"
            }
        }
    },
    {
        "status": "fulfilled",
        "value": {
            "issue": "BTD-13",
            "data": {
                "self": "https://irfangg.atlassian.net/rest/api/3/issue/10012/worklog/10084",
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
                "created": "2021-07-10T16:14:39.550+0530",
                "updated": "2021-07-10T16:14:39.550+0530",
                "started": "2021-07-10T23:30:00.751+0530",
                "timeSpent": "1m",
                "timeSpentSeconds": 60,
                "id": "10084",
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
            "issue": "BTD-1",
            "data": {
                "errorMessages": [
                    "Worklog must not be null."
                ],
                "errors": {
                    "timeLogged": "You must indicate the time spent working."
                }
            }
        }
    }
]
*/