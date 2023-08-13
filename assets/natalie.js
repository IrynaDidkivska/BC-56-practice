// Створи функцію,
//  яка приймає масив чисел та повертає новий масив,
//     який містить тільки непарні числа з вхідного масиву.

const number = [2, 23, 4, 6, 7, 8, 111, 3, 3, 56, 8];
const sortNumber = number => {
  return number.filter(el => (el % 2 === 0 ? el : ''));
};
console.log(sortNumber(number));

// Створи функцію, яка приймає масив чисел
// та повертає новий масив,
// в якому кожен елемент є квадратом відповідного елемента вхідного масиву.
const num = [2, 23, 4, 6, 7, 8, 111, 3, 3, 56, 8];
const sortNum = number => {
  return number.map(el => el * el);
};
console.log(sortNum(num));
