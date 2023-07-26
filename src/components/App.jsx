import { BlogCard } from './BlogCard';
import article from '../assets/article.json';
console.log(article);
export const App = () => {
  return (
    <div>
      <BlogCard {...article} />
    </div>
  );
};
