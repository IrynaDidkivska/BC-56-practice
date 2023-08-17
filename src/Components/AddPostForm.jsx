import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addPostsThunk } from 'redux/operations';
import { addPost } from 'redux/postSlice';
import { selectUser } from 'redux/selectors';

export const AddPostForm = () => {
  const dispatch = useDispatch();
  // const user = useSelector(state => state.user.name);
  const user = useSelector(selectUser);

  const [newPost, setNewPost] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const newPostData = { title, body: newPost, author: user };
    dispatch(addPostsThunk(newPostData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={event => setTitle(event.target.value)} />
      <textarea
        onChange={event => setNewPost(event.target.value)}
        rows={4}
        cols={40}
      ></textarea>
      <button>Add post</button>
    </form>
  );
};
