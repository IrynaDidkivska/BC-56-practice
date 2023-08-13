// Створи функцію, яка приймає масив об'єктів з властивістю price та повертає найбільшу ціну з цих об'єктів.
// Створи функцію перевірку на поліндром

// const object = [
//   { name: 'Droid', price: 599 },
//   { name: 'Car', price: 2599 },
//   { name: 'Moped', price: 1788 },
// ];

// function addBigPrice(object) {
//   const maxPrice = Math.max(...object.map(item => item.price));

//   console.log(maxPrice);
// }

// addBigPrice(object);

const str = 'ротор';

function addPolindrom(str) {
  const primiryStr = str;
  console.log(primiryStr);
  const result = str.split('').reverse().join('');
  console.log(result);

  if (primiryStr === result) {
    console.log('Ура, я полиндром');
  } else {
    console.log('Жаль что я не полиндром');
  }
}

addPolindrom(str);
