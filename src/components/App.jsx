import 'modern-normalize';
import { styled } from 'styled-components';
import { BlogCard } from './BlogCard/BlogCard';
import article from '../assets/article.json';
import { TodoListFn } from './TodoList';



console.log(article);
export const App = () => {
  const bookList = [
    { id: 1, price: 5, name: 'FairTale' },
    { id: 2, price: 10, name: 'Science Fiction' },
  ];

  const Films = [
    { id: 1, price: 5, name: 'Film1' },
    { id: 2, price: 10, name: 'Film2' },
  ];

  return (
    <Container >
      <BlogCard article={ article} />

    </Container>
  );
};


const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`