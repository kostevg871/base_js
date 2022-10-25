// function showMessage(message) {
//   console.log(message);
// }

// showMessage("Привет");

// function sum(a, b = 0) {
//   console.log(a + b);
// }

// sum(2);
// function sum(a, b = 0) {
//   return a + b;
// }

// sum(2, 3);

// const result = sum(3, 5);
// console.log(result);

// function getName() {
//   const userName = "Alex";
//   return userName;
// }

// function getUserName() {
//   const userName = "Ivan";
//   return userName;
// }

// console.log(getName());
// console.log(getUserName());

// let name = "Alex";

// function sayHello(message = "Hello") {
//   name = "Ivan";
//   console.log(`${message} ${name} !!`);
// }

// console.log(name);
// sayHello();
// console.log(name);

// практика

// //1
// function helloUser(userName = "Guest") {
//   console.log(`Hello ${userName}`);
// }

// helloUser("Ivan");
// helloUser();

// //2
// function exponentiate(a, b = 1) {
//   console.log(a ** b);
// }

// exponentiate(2);
// exponentiate(2, 10);

// //3
// function avarage(arrayToNumber) {
//   let result = 0;
//   for (let i = 0; i <= arrayToNumber.length - 1; i++) {
//     result += arrayToNumber[i];
//   }

//   console.log(result / arrayToNumber.length);
// }

// avarage([1, 4, 3, 2]);

// const sayHello = function (name) {
//   console.log(`Hello ${name}`);
// };

// // sayHello("Alex")

// const funcExample = function (callback) {
//   for (let i = 0; i < 10000000000; i++) {}
//   callback("Alex");
// };

// funcExample(sayHello);

// sum(1, 2);

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(1, 2);

// const multiply = function (a, b) {
//   console.log(a * b);
// };

// multiply(2, 4);

// const getName = (name) => `Name ${name}`;
// console.log(getName("Alex"));

// getName("Alex");

// const getNameTwo = (name) => {
//   return `Name ${name}`;
// };

// getNameTwo("Ivan");

// const quadro = (a) => a ** 2;

// console.log(quadro(3));

const showString = (str, n) => {
  for (let i = 0; i < n; i++) {
    console.log(str);
  }
};

// showString("Строка", 3);

const isVowel = (letter) => {
  const letGlas = ["а", "у", "о", "ы", "э", "я", "ю", "ё", "и", "е"];
  for (let i = 0; i < letGlas.length; i++) {
    if (letter === letGlas[i]) {
      return true;
    }
  }
  return false;
};

// console.log(isVowel("м"));
/*
Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае
*/
let polindrome = function (strPolin) {
  for (let i = 0; i <= strPolin.length / 2; i++) {
    if (strPolin[i] !== strPolin[strPolin.length - i - 1]) {
      return false;
    }
  }
  return true;
};

// console.log(polindrome("топот"));
// console.log(polindrome("баклажан"));

//HOMEWORK

//1
/*
Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
*/
const returnQuadro = (a) => a ** 2;
// console.log(returnQuadro(5));

//2
/*
Сделайте функцию, которая возвращает сумму двух чисел.
*/
const sum = (a, b) => a + b;
// console.log(sum(5, 6));

//3
/*
Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
*/
const sumTree = (a, b, c) => a - b / c;
// console.log(sumTree(2, 2, 2));

//4
/*
Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
*/

const dayOfTheWeek = function (numberWeek) {
  let nameDay;
  switch (numberWeek) {
    case 1:
      nameDay = "Понедельник";
      break;
    case 2:
      nameDay = "Вторник";
      break;
    case 3:
      nameDay = "Среда";
      break;
    case 4:
      nameDay = "Четверг";
      break;
    case 5:
      nameDay = "Пятница";
      break;
    case 6:
      nameDay = "Суббота";
      break;
    case 7:
      nameDay = "Воскресенье";
      break;
    default:
      nameDay = "Введите число от 1 до 7";
      break;
  }
  return nameDay;
};

// console.log(dayOfTheWeek(1));
// console.log(dayOfTheWeek(4));
// console.log(dayOfTheWeek(10));

//5
/*
Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
*/

let eaquals = (a, b) => (a === b ? true : false);

// console.log(eaquals(1,2));
// console.log(eaquals(5,5));

//6
/*
Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.
*/

let sumMore10 = (a, b) => (a + b > 10 ? true : false);

// console.log(sumMore10(5, 9));
// console.log(sumMore10(0, 0));
// console.log(sumMore10(3, 2));

//7
/*
Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
*/

let negativeNumber = (a) => (a < 0 ? true : false);

// console.log(negativeNumber(1));
// console.log(negativeNumber(0));
// console.log(negativeNumber(-4));

//8
/*
Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
*/

let isNumberInRange = (a) => (a > 0 && a < 10 ? true : false);

// console.log(isNumberInRange(1));
// console.log(isNumberInRange(10));
// console.log(isNumberInRange(-4));

//9
/*
Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
*/

let arrayToNumber9 = [-5, 2, 10, 15, 30, 4, 9, 5, 2, 4, 5];

function arrayToNumber9IsRange(array) {
  let result = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (isNumberInRange(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

// console.log(arrayToNumber9IsRange(arrayToNumber9));

//10
/*
Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
*/

function getDigitsSum(a) {
  let sum = 0;
  let str = String(a);
  for (let i = 0; i < str.length; i++) sum += Number(str[i]);
  return sum;
}

// console.log(getDigitsSum(11));
// console.log(getDigitsSum(45));
// console.log(getDigitsSum(1111));

//11
/*
Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
*/

function sumEquals13() {
  let sumEquals13Array = [];
  for (let year = 1; year <= 2020; year++) {
    if (getDigitsSum(year) === 13) {
      sumEquals13Array.push(year);
    }
  }
  return sumEquals13Array;
}

// console.log(sumEquals13());

//12
/*
Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
*/

let isEven = (a) => (a % 2 === 0 ? true : false);

// console.log(isEven(15));
// console.log(isEven(1222));
// console.log(isEven(333));
// console.log(isEven(4));

//13
/*
Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
*/

let arrayIsNumber = [12, 41, 24, 44, 5, 554, 55555, 3, 2, 5, 6, 889, 888];

let arrayIsEven = function (arrayIsNumber) {
  let arrayIsEvenResult = [];
  for (let i = 0; i <= arrayIsNumber.length; i++) {
    if (isEven(arrayIsNumber[i])) {
      arrayIsEvenResult.push(arrayIsNumber[i]);
    }
  }
  return arrayIsEvenResult;
};

// console.log(arrayIsEven(arrayIsNumber));

//14
/*
Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
*/
function getDivisors(a) {
  let arrayGetDivisors = [];
  for (let i = 1; i <= 9; i++) {
    if (a % i === 0) {
      arrayGetDivisors.push(i);
    }
  }
  return arrayGetDivisors;
}

// console.log(getDivisors(81));
// console.log(getDivisors(11));

//15
/*
Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
*/
function sumMore9Always(a) {
  while (getDigitsSum(a) > 9) {
    a = getDigitsSum(a);
  }
  return a;
}

// console.log(sumMore9Always(99));

//16
/*
Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае.
*/
let polindromeFunc = (strPolin) =>{
  for (let i = 0; i <= strPolin.length / 2; i++) {
    if (strPolin[i] !== strPolin[strPolin.length - i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(polindromeFunc("lololol"));
