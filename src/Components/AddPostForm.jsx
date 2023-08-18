import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPostsThunk } from 'redux/operations';
import { selectUser } from 'redux/selectors';
import { styled } from 'styled-components';

export const AddPostForm = () => {
  const dispatch = useDispatch();
  // const user = useSelector(state => state.user.name);
  const user = useSelector(selectUser);

  const [newPost, setNewPost] = useState('');
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    const newPostData = { title, body: newPost, author: user };
    dispatch(addPostsThunk(newPostData));
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input type="text" onChange={event => setTitle(event.target.value)} />
      <textarea
        onChange={event => setNewPost(event.target.value)}
        rows={4}
        cols={40}
      ></textarea>
      <Button>Add post</Button>
    </Form>
  );
};

export const Button = styled.button`
  box-shadow: 0px 0px 4px 1px black;
  background-color: white;
  border: none;
  border-radius: 3px;
  padding: 8px 12px;
  transition: all 0.3s ease;
  border: none;
  &:hover {
    background-color: blue;
    color: white;
    cursor: pointer;
  }
`;

export const Flex = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 20px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
  width: 400px;
`;
