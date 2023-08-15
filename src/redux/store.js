import { configureStore } from '@reduxjs/toolkit';
import { postReducer } from './postSlice';
import { userReducer } from './userSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    user: userReducer,
  },
});
