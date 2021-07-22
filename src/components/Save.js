import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveLogs } from '../redux/save/action';
import Button from './Button';

export default function Save() {
  const dispatch = useDispatch();
  const workLogItems = useSelector((state) => state.worklogs.workLogItems);
  const savingInProgress = useSelector((state) => state?.loggedDetails?.savingInProgress || false);
  const logsToSave = workLogItems.filter((issue) => issue.issue);
  const onSave = () => {
    dispatch(saveLogs(logsToSave));
  };
  return (
    <>
      {savingInProgress ? (
        <div className="saveInProgress">Saving........</div>
      ) : (
        <Button className="btn btn-save" clickHandler={onSave} buttonText="Save Work Logs" />
      )}
    </>
  );
}
