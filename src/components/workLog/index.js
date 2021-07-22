import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_ROW, EDIT_ACTION } from '../../constants';
import AutoComplete from '../AutoComplete';

const WorkLog = () => {
  const workLogItems = useSelector((state) => state?.worklogs?.workLogItems || []);
  const filterBy = useSelector((state) => state?.worklogs?.filterBy || {});
  const dispatch = useDispatch();
  const handleOnChange = (e, id) => {
    dispatch({
      type: EDIT_ACTION,
      payload: {
        id,
        name: e.target.name,
        value: e.target.value,
      },
    });
  };
  const delRow = (id) => {
    dispatch({
      type: DELETE_ROW,
      payload: { id },
    });
  };

  return (
    <div className="tableContainer">
      <div className="headerRow">
        <div className="class_issue">Issue</div>
        <div className="class_timeSpent">Time Spent</div>
        <div className="class_logDate">Date</div>
        <div className="class_comments">Comment</div>
      </div>
      {workLogItems.length > 0 &&
        workLogItems
          .filter((row) => {
            if (filterBy.value !== '') {
              if (filterBy.name === 'filterByIssue') {
                return row.issue.includes(filterBy.value) || row.comment.includes(filterBy.value);
              }
            }
            return row;
          })
          .map((row) => {
            return (
              <div key={row.id} style={{ display: 'flex' }} className="logRow">
                <AutoComplete name="issue" value={row.issue} id={row.id} />
                <input
                  name="timeSpent"
                  className="class_timeSpent"
                  placeholder="1d | 1h | 1m"
                  value={row.timeSpent}
                  onChange={(e) => handleOnChange(e, row.id)}
                />
                <input
                  name="logDate"
                  className="class_logDate"
                  type="date"
                  value={row.logDate}
                  onChange={(e) => handleOnChange(e, row.id)}
                />
                <input
                  name="comment"
                  className="class_comments"
                  placeholder="Comment"
                  value={row.comment}
                  onChange={(e) => handleOnChange(e, row.id)}
                />
                <button className="del-btn" onClick={() => delRow(row.id)}>
                  -
                </button>
              </div>
            );
          })}
    </div>
  );
};
export default WorkLog;
