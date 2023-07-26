import article from '../assets/article.json';
import { TodoListFn } from './TodoList';

console.log(article);
export const App = () => {
  const bookList = [
    { id: 1, name: 'FairTale' },
    { id: 2, price: 10, name: 'Science Fiction' },
  ];

  const Films = [
    { id: 1, price: 5, name: 'Film1' },
    { id: 2, price: 10, name: 'Film2' },
  ];

  return (
    <div>
      <TodoListFn title="Books" list={bookList} />
      <TodoListFn title="Films" list={Films} />
    </div>
  );
};
