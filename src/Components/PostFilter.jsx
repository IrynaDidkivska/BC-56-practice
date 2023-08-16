import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/postSlice';

export const PostFilter = () => {
  const dispatch = useDispatch();

  const handelChangeInput = e => {
    dispatch(setFilter(e.target.value));
  };

  return <input onChange={handelChangeInput} placeholder="Filter" />;
};
