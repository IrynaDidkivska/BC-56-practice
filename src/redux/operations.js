import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const API = axios.create({
  baseURL: 'https://goit-task-manager.herokuapp.com/',
});
const setToken = token => {
  API.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearToken = token => {
  API.defaults.headers.common.Authorization = ``;
};

export const regThunk = createAsyncThunk(
  'auth/reg',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.post('users/signup', credentials);
      setToken(data.token);
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
      setToken(data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await API.post('users/logout');
      clearToken();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const savedToken = getState().auth.token;
    if (!savedToken) {
      toast.warning('Token is not exist!!');
      return rejectWithValue(`Token is not found!`);
    }
    try {
      setToken(savedToken);
      const { data } = await API.get('users/me');
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
