import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const regThunk = createAsyncThunk(
  'auth/reg',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.post('users/signup', credentials);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.post('users/login', credentials);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
