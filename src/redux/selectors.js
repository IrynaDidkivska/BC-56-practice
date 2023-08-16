export const selectPosts = state => state.posts.posts;
export const selectUser = state => state.user.name;
export const selectLogin = state => state.user.isLoggedIn;
export const selectFilter = state => state.posts.filter;
export const likedPosts = state => state.likedPosts.likedPosts;
