import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, deletePost } from 'redux/postSlice';

export const PostList = () => {
  const { posts } = useSelector(state => state.posts);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deletePost(id));
  };

  return (
    <div>
      <ul>
        {' '}
        {posts.map(post => (
          <li key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h2>{post.author}</h2>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
