import { createSelector } from '@reduxjs/toolkit';

export const selectPosts = state => {
  console.log('SELECT POSTS WITHOUT RESELECT');
  return state.posts.posts;
};
export const selectUser = state => state.user.name;
export const selectLogin = state => state.user.isLoggedIn;
export const selectFilter = state => state.posts.filter;
export const likedPosts = state => state.likedPosts.likedPosts;

export const selectPostsMemo = createSelector(
  [state => state.posts.posts],
  posts => {
    console.log('SELECT POSTS');
    return posts;
  }
);

export const selectLikedPostsCount = createSelector([likedPosts], posts => {
  console.log('calc');
  return posts.length;
});

// Звичайний селектор, викликається на кожну подію в редаксі
// Перераховує заново і відмальовує

// export const selectLikedPostsCount2 = state => {
//   console.log('calc');
//   const posts = likedPosts(state);
//   return posts.length;
// };
