/* eslint-disable*/

import React from 'react';
import { connect } from 'react-redux';
import { getPosts, statusUnset, createPostLocaly } from './redux/posts/action';

const PostList = ({ dispatch, status, itemsPosts, actionCreated }) => {
  const [elementName, setElementName] = React.useState('');
  const fetchDataPosts = async () => {
    dispatch(getPosts());
    console.log('Every post has been, getted', itemsPosts);
  };

  React.useEffect(() => {
    fetchDataPosts();
  }, []);

  React.useEffect(() => {
    switch (status) {
      case 'ERROR':
        console.log('ERROR');
        dispatch(statusUnset());
        break;
      case 'PENDING':
        dispatch(statusUnset());
        break;
      default:
        break;
    }
  }, [status]);

  return (
    <div>
      <input
        type="text"
        value={elementName}
        placeholder="Element name added"
        onChange={e => setElementName(e.target.value)}
      />
      <button onClick={() => dispatch(createPostLocaly(elementName))}>
        tests
      </button>

      <h3>LIST OF Element Added</h3>
      {actionCreated &&
        actionCreated.map(data => {
          return (
            <span>
              {data}
              <br />
            </span>
          );
        })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    status: state.posts.status,
    itemsPosts: state.posts.items,
    actionCreated: state.posts.newAction
  };
};

export default connect(
  mapStateToProps,
  null // Generaly its the place of mapStateToDispatch
)(PostList);
