const { createSlice } = require('@reduxjs/toolkit');

const likedPostsSlice = createSlice({
  name: 'likedPosts',
  initialState: {
    likedPosts: [],
  },
  reducers: {
    addLikedPost: (state, { payload }) => {
      state.likedPosts.push(payload);
    },
    deleteLikedPost: (state, { payload }) => {
      state.likedPosts = state.likedPosts.filter(item => item.id !== payload);
    },
  },
});

export const { addLikedPost, deleteLikedPost } = likedPostsSlice.actions;
export const likedReducer = likedPostsSlice.reducer;
