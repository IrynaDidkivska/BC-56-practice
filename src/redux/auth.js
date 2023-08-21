import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, regThunk } from './operations';

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: '',
    isLogin: false,
  },
  extraReducers: builder => {
    builder
      .addCase(regThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.token = payload.token;
        state.isLogin = true;
      });
  },
});

export const authReducer = slice.reducer;
