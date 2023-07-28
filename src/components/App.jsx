import { Cart } from './Cart/Cart';
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

    }
  ]


  return (
    <div>
      <Profiles data={obj} />
      <ProductsList produts={products} />
      <Cart cart={cartLisrt}/>
    </div>



  );
};
