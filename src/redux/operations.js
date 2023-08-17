// https://64ddff25825d19d9bfb1d719.mockapi.io/posts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://64abd6919edb4181202ea4d0.mockapi.io',
});

export const fetchPostsThunk = createAsyncThunk(
  'posts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.get('/posts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePostsThunk = createAsyncThunk(
  'posts/deleteOne',
  async (id, thunkAPI) => {
    try {
      const { data } = await API.delete(`/posts/${String(id)}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addPostsThunk = createAsyncThunk(
  'posts/add',
  async (body, thunkAPI) => {
    try {
      const { data } = await API.post('/posts', body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatePostsThunk = createAsyncThunk(
  'post/update',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await API.put(`/posts/${body.id}`, body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
