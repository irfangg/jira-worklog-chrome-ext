import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_NEW_ROW } from '../../constants';
import Filter from './Filter';

export default () => {
  const dispatch = useDispatch();
  return (
    <div className='searchOrAdd'>
      <Filter name="filterByIssue" placeholder="Filter by issue/comment" />
      <button className='btn-add' onClick={() => dispatch({ type: ADD_NEW_ROW })}>Add New</button>
    </div>
  );
};
