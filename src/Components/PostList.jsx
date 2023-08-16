import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, deletePost } from 'redux/postSlice';
import { PostFilter } from './PostFilter';
import { selectFilter, selectPosts } from 'redux/selectors';
import { addLikedPost } from 'redux/likedPostsSlice';

export const PostList = () => {
  const posts = useSelector(selectPosts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deletePost(id));
  };
  const getFilterData = () => {
    return posts.filter(post =>
      post.title.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filterData = getFilterData();

  return (
    <div>
      <PostFilter />
      <ul>
        {' '}
        {filterData.map(post => (
          <li key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h2>{post.author}</h2>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
            <button onClick={() => dispatch(addLikedPost(post))}>
              Add liked post
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
