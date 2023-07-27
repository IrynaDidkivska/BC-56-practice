import 'modern-normalize';
import { styled } from 'styled-components';
import { BlogCard } from './BlogCard/BlogCard';
import article from '../assets/article.json';

console.log(article);
export const App = () => {
  return (
    <Container>
      <BlogCard article={article} />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
