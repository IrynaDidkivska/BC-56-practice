import { createContext } from 'react';

//Створили пустий контекст
export const MyContext = createContext();
//Створили значення для контекста
export const contextValue = {
  options: ['africa', 'america', 'asia', 'europe', 'oceania'],
  sayHi: name => {
    console.log(`Hello ${name}`);
  },
  login: () => {
    console.log('login');
  },
};
