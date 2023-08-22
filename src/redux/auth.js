import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, refreshThunk, regThunk } from './operations';

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: '',
    isLogin: false,
    isRefresh: false,
  },
  extraReducers: builder => {
    builder
      .addCase(regThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLogin = true;
        state.isRefresh = false;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        state.user.name = '';
        state.user.email = '';
        state.token = '';
        state.isLogin = false;
      })
      .addCase(refreshThunk.pending, (state, { payload }) => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.isRefresh = false;
      });
  },
});

export const authReducer = slice.reducer;
