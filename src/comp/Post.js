import React from 'react';
import Tweet from './Tweet';

const Post = (props) => {
  const { onSubmit } = props;
  return (
    <div>
      <Tweet onSubmit={onSubmit} />

    </div>
  )
}

export default Post;