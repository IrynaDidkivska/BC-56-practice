import { Cart } from './Cart/Cart';
import { ProductsList } from './Products/ProductsList';
import { Profiles } from './Profiles/Profiles';
import { Stats } from './Stats/Stats';


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

  const statistics = [{
      id: '02x5',
      title: 'Income',
      count: 12000,
      user: {
          name: 'Roman',
          age: 28,
      }
  },
  {
    id: '03b6',
    title: 'Income',
    count: 15000,
    user: {
        name: 'Andriy',
        age: 36,
    }
},
]


  return (
    <div>
      <Profiles data={obj} />
      <ProductsList produts={products} />
      <Cart cart={cartLisrt}/>
      <Stats statistics={statistics} message='Hello everybody!'/>
    </div>



  );
};
