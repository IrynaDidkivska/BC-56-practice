import { useDispatch, useSelector } from 'react-redux';
import { PostFilter } from './PostFilter';
import { selectFilter, selectPostsMemo } from 'redux/selectors';
import { addLikedPost } from 'redux/likedPostsSlice';
import { ListStyled } from 'pages/FavouritePosts';
import { styled } from 'styled-components';
import { deletePostsThunk, updatePostsThunk } from 'redux/operations';
import { Button, Flex } from './AddPostForm';

export const PostList = () => {
  const posts = useSelector(selectPostsMemo);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deletePostsThunk(id));
  };
  const getFilterData = () => {
    return posts.filter(post =>
      post.title.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const handleUpdate = post => {
    dispatch(updatePostsThunk({ ...post, title: 'THUNK' }));
  };

  const filterData = getFilterData();

  return (
    <div>
      <PostFilter />
      <ListStyled>
        {filterData.map(post => (
          <PostStyled key={post.id}>
            <h1 onClick={() => handleUpdate(post)}>{post.title}</h1>
            <p>{post.body}</p>
            <h2>{post.author}</h2>
            <Flex>
              <Button onClick={() => handleDelete(post.id)}>Delete</Button>
              <Button onClick={() => dispatch(addLikedPost(post))}>
                Add liked post
              </Button>
            </Flex>
          </PostStyled>
        ))}
      </ListStyled>
    </div>
  );
};
export const PostStyled = styled.li`
  border: 2px solid black;
  box-shadow: 2px 2px 3px 1px gray;
  padding: 10px 20px;
`;
