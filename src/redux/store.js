import { configureStore } from '@reduxjs/toolkit';
import { postReducer } from './postSlice';
import { userReducer } from './userSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { likedReducer } from './likedPostsSlice';
const persistConfigPosts = {
  key: 'posts',
  version: 1,
  storage,
};

const persistedReducerPosts = persistReducer(persistConfigPosts, postReducer);

export const store = configureStore({
  reducer: {
    posts: persistedReducerPosts,
    user: userReducer,
    likedPosts: likedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
