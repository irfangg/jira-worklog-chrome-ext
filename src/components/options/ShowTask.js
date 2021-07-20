import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_SHOW_TASK } from '../../constants';

export default function ShowTask() {
    const showTask = useSelector(state => state.options.showTask);
    const dispatch = useDispatch();
    const handleShowTask = () => {
        dispatch({
            type:TOGGLE_SHOW_TASK
        })
    }
    return (
        <div className='showTask-Container'>
             <input type='checkbox' id='showTaskCheckbox' value={showTask} onChange={handleShowTask}/><label htmlFor='showTaskCheckbox' >Show Sub Tasks</label>
        </div>
    )
}
