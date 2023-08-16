import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  filter: '',
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
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addPost, deletePost, setFilter } = postSlice.actions;
export const postReducer = postSlice.reducer;
