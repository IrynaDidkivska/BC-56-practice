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
  },
});

export const { addLikedPost } = likedPostsSlice.actions;
export const likedReducer = likedPostsSlice.reducer;
