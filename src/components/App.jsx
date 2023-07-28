import { ProductsList } from './Products/ProductsList';
import { Profiles } from './Profiles/Profiles';

export const App = () => {
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

  return (
    <div>
      <Profiles data={obj} />
      <ProductsList produts={products} />
    </div>
  );
};
