import React from 'react';
import AutoComment from './AutoComment';
import ShowTask from './ShowTask';

export default function Options() {
  return (
    <div className="includeOptions">
      <AutoComment />
      <ShowTask />
    </div>
  );
}
