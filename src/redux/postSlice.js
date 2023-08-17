import { createSlice } from '@reduxjs/toolkit';
import {
  addPostsThunk,
  deletePostsThunk,
  fetchPostsThunk,
  updatePostsThunk,
} from './operations';

const initialState = {
  posts: [],
  filter: '',
};
export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPostsThunk.fulfilled, (state, { payload }) => {
        state.posts = payload;
      })
      .addCase(deletePostsThunk.fulfilled, (state, { payload }) => {
        state.posts = state.posts.filter(post => post.id !== payload);
      })
      .addCase(addPostsThunk.fulfilled, (state, { payload }) => {
        state.posts.push(payload);
      })
      .addCase(updatePostsThunk.fulfilled, (state, { payload }) => {
        const findedIndex = state.posts.findIndex(
          post => post.id === payload.id
        );
        console.log(findedIndex);
        state.posts.splice(findedIndex, 1, payload);
      });
  },
});

export const { setFilter } = postSlice.actions;
export const postReducer = postSlice.reducer;
