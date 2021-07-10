import { handleActions } from 'redux-actions';
import { addNewRow, onEditIssue, delRow, resetStore, filterBy } from './action';
import { nanoid } from 'nanoid';

const DEFAULT_STATE = {
  workLogItems: [],
  filterBy: {}
};

const handlers = {
  [addNewRow]: state => {
    const newRow = {
      id: nanoid(),
      issue: '',
      timeSpent: '',
      logDate: `${new Date().toISOString().split('T')[0]}`,
      comment: ''
    };
    const newWorkLog = state.workLogItems?.slice() || [];
    newWorkLog.push(newRow);
    return {
      ...state,
      workLogItems: newWorkLog
    };
  },
  [onEditIssue]: (state, action) => {
    const { id, value, name } = action.payload;
    const updateWorkLog = state.workLogItems.map(row => {
      if (row.id === id) {
        if (name === 'issue') {
          row.issue = value;
        } else if (name === 'timeSpent') {
          row.timeSpent = value;
        } else if (name === 'comment') {
          row.comment = value;
        } else if(name === 'logDate'){
          row.logDate = value;
        }
      }
      return row;
    });
    return {
      ...state,
      workLogItems: updateWorkLog
    };
  },
  [delRow]: (state, action) => {
    const { id } = action.payload;
    const updateWorkLog = state.workLogItems.filter(row => row.id !== id);
    return {
      ...state,
      workLogItems: updateWorkLog
    };
  },
  [filterBy]: (state, action) => {
    const { value, name } = action.payload;
    return {
      ...state,
      filterBy: { value, name }
    };
  },
  [resetStore]: () => {
    return {
      ...DEFAULT_STATE
    };
  }
};

export default handleActions(handlers, DEFAULT_STATE);
