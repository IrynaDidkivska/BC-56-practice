import { Cart } from './Cart/Cart';
import { Modal } from './Modal/Modal';
import { ProductsList } from './Products/ProductsList';
import { Profiles } from './Profiles/Profiles';
import { Stats } from './Stats/Stats';
import { TodoList } from './TodoList/TodoList';

export const App = () => {
  // console.log('' || 1);
  // console.log(0 || 1);
  // console.log('-----------------');
  // console.log('' ?? 1);
  // console.log(0 ?? 1);
  // console.log(false ?? true);
  // console.log(false || true);

  // console.log(null ?? 1);
  // console.log(undefined ?? 1);
  // console.log(undefined ?? null);

  // console.log(0 ?? 1);

  const data = {
    name: 'Anton',
    chls: 2,
  };
  let result = data.children ? data.children : 21;
  // console.log('Result > ', data.children ?? ++data.children);
  const obj = {
    name: 'Andriy',
    email: 'andriy-dog@gmail.com',
  };
  const products = [
    {
      name: 'Tablet',
      price: 100,
      id: 1,
    },
    {
      name: 'Phone',
      price: 200,
      id: 2,
    },
  ];

  const cartLisrt = [
    {
      id: 0,
      title: 'chery',
      count: 3,
      price: 60,
    },
    {
      id: 1,
      title: 'potato',
      count: 8,
      price: 20,
    },
  ];

  const statistics = [
    {
      id: '02x5',
      title: 'Income',
      count: 12000,
      user: {
        name: 'Roman',
        age: 28,
      },
    },
    {
      id: '03b6',
      title: 'Income',
      count: 15000,
      user: {
        name: 'Andriy',
        age: 36,
      },
    },
  ];

  return (
    <div>
      <Profiles data={obj} />
      <ProductsList produts={products} />
      <Cart cart={cartLisrt} />
      <Stats statistics={statistics} message="Hello everybody!" />
      <TodoList {...data} />
      <Modal>
        <Cart cart={cartLisrt} />
      </Modal>
    </div>
  );
};
