//Створи функцію, яка приймає масив чисел і повертає масив з тими ж числами, але відсортованими в порядку зростання.
// const arr = [1, 5, -1, 2, 4, 10, 33, 2];

// const numberFilter = arr => {
//   const arrayNum = [...arr].sort((a, b) =>
// a - b);
//   console.log(arrayNum);
// };
// numberFilter(arr);

//Створи функцію, яка приймає масив об'єктів і повертає новий масив, в якому тільки ті об'єкти, властивість "age" яких більше або рівна 18.

// const arr = [
//   { name: 'Alex', age: 22 },
//   { name: 'Oleh', age: 15 },
//   { name: 'Stepan', age: 17 },
//   { name: 'Helen', age: 71 },
// ];

// const filteAge = arr => {
//   return arr.filter(item => item.age >= 18);
// };

// console.log(filteAge(arr));
//Створи функцію, яка приймає масив чисел і повертає середнє арифметичне цих чисел.

// const arr = [4, 10, 4];

// const fn = arr => {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   const result = total / arr.length;
//   return result;
// };

// console.log(fn(arr));

//Створи функцію, яка приймає два аргументи - рядок та символ, і повертає кількість входжень цього символу в рядок.

// const str = 'Hello from react aaa';

// const fn2 = (str, symbol) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === symbol) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(fn2(str, 'a'));
//Створи функцію, яка приймає рядок і повертає новий рядок, у якому перша літера кожного слова замінена на велику.

// const str = 'hello from react';

// function newStr(str) {
//   const arrFromStr = str.split(' ');
//   console.log(arrFromStr);
//   const res = arrFromStr.map(el => {
//     return el[0].toUpperCase() + el.slice(1);
//   });
//   return res.join(' ');
// }
// console.log(newStr(str));

//Створи функцію, яка приймає масив об'єктів з властивістю name та повертає новий масив, який містить тільки ті об'єкти, в яких ім'я починається з певної літери.
const arr = [
  { name: 'Alex', age: 22 },
  { name: 'Oleh', age: 15 },
  { name: 'Stepan', age: 17 },
  { name: 'Helen', age: 71 },
  { name: 'Anatoliy', age: 71 },
  { name: 'Olya', age: 71 },
];

function nameArr(arr, symbol) {
  const newArr = arr.filter(item => item.name[0] === symbol);
  return newArr;
}
console.log(nameArr(arr, 'A'));
