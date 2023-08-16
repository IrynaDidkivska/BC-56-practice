import React from 'react';
import { useSelector } from 'react-redux';
import { likedPosts } from 'redux/selectors';

export const FavouritePosts = () => {
  const likedPostsData = useSelector(likedPosts);
  return (
    <ul>
      {likedPostsData.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
