import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_AUTO_COMMENT } from '../../constants';

export default function AutoComment() {
  const autoComment = useSelector((state) => state.options.autoComment);
  const dispatch = useDispatch();
  const handleAutoComment = () => {
    dispatch({
      type: TOGGLE_AUTO_COMMENT,
    });
  };
  return (
    <div className="autoCommentContainer">
      <input type="checkbox" id="autoComment" value={autoComment} onChange={handleAutoComment} />
      <label htmlFor="autoComment">Auto Comment</label>
    </div>
  );
}
