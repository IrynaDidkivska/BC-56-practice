import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};
export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;
export const postReducer = postSlice.reducer;
