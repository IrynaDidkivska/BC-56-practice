// 1 Створи функцію, яка приймає рядок і повертає новий рядок, у якому всі слова з великої літери записані в оберненому порядку.

const string = 'Hello from React';

function Test1(string) {
  const splittedString = string.split(' ');
  const arr = [];
  for (let i = 0; i < splittedString.length; i++) {
    if (splittedString[i][0] === splittedString[i][0].toLowerCase()) {
      arr.push(splittedString[i]);
    }
    if (splittedString[i][0] === splittedString[i][0].toUpperCase()) {
      arr.push(splittedString[i].split('').reverse().join(''));
    }
  }
  return arr.join(' ');
}

console.log(Test1(string));

// 2. Створи функцію, яка приймає масив чисел та повертає новий масив, який містить лише унікальні числа з вихідного масиву (тобто кожне число в новому масиві зустрічається тільки один раз).

const arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 3];

function Test2(arr) {
  const resArr = arr.reduce(
    (acc, num) => (!acc.includes(num) ? (acc += num) : acc),
    []
  );
  return resArr;
  //   return arr.reduce((acc, num) => !acc.includes(num), []);
}

console.log(Test2(arr));
