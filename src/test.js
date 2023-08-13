//Створи функцію, яка приймає масив чисел і повертає масив з тими ж числами, але відсортованими в порядку зростання.
// const arr = [1, -2, 4, 11, 9, 99, 22];

// const sorting = arr => {
//   return arr.sort((a, b) => a - b);
// };

// console.log(sorting(arr));

//Створи функцію, яка приймає масив об'єктів і повертає новий масив, в якому тільки ті об'єкти, властивість "age" яких більше або рівна 18.

// const arr = [
//   { name: 'Alex', age: 34 },
//   { name: 'Stepan', age: 14 },
//   { name: 'John', age: 24 },
//   { name: 'Peter', age: 4 },
//   { name: 'Christian', age: 75 },
// ];
// const ageMoreThan = (arr, age) => {
//   return arr.filter(object => object.age >= age);
// };

// console.log(ageMoreThan(arr, 34));
// console.log(ageMoreThan(arr, 3));
// console.log(ageMoreThan(arr, 21));

//Створи функцію, яка приймає масив чисел і повертає середнє арифметичне цих чисел.
// const arr = [4, 2, 12];
// const total = arr => {
//   const totalArr = arr.reduce((acc, current) => acc + current, 0) / arr.length;
//   return totalArr;
// };
// console.log(total(arr));

//Створи функцію, яка приймає масив чисел та повертає новий масив, який містить тільки непарні числа з вхідного масиву.

// const arr = [1, 3, 2, 5, 4, 7, 10, 8];

// const newNumbers = arr => {
//   const newAtt = arr.filter(number => number % 2 !== 0);
//   return newAtt;
// };

// console.log(newNumbers(arr));

//Створи функцію, яка приймає рядок і повертає новий рядок, у якому всі слова з великої літери записані в оберненому порядку.

// const str = 'Hello from React my Dear friend';
// const someRevers = str => {
//   return str
//     .split(' ')
//     .map(w => {
//       if (w[0] === w[0].toUpperCase()) {
//         return w.split('').reverse().join('');
//       } else {
//         return w;
//       }
//     })
//     .join(' ');
// };
// console.log(someRevers(str));

//Створи функцію, яка приймає масив рядків та повертає новий масив, який містить тільки рядки, які містять підрядок "JS".

// const arr = ['Hello JS', 'I know react', 'JS is so bad'];

const str = 'React is so cool';

const newFn = (str, symbol) => {
  return str
    .split('')
    .reduce((acc, str) => (str === symbol ? (acc += 1) : acc), 0);
};

const fn = arr => {
  return arr.filter(el => el.includes('JS'));
};

// console.log(fn(arr));
console.log(newFn(str, 'o'));
const data = [
  { title: 'Buy milk', id: 1, completed: false },
  { title: 'Buy phone', id: 2, completed: false },
  { title: 'Play football', id: 3, completed: false },
];
