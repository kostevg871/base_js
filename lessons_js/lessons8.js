// const number = 1;

// const increment = (a) => {
//   console.log(a, "before");
//   a += 1;
//   console.log(a, "after");
// };

// console.log(number, "one");
// increment(number);
// console.log(number, "two");

// const arr = [1, 2, 3, 4];
// const arrPush = (arr) => {
//   arr.push(5);
// };

// console.log(arr);
// arrPush(arr);
// console.log(arr);

// const user = { name: "Alex" };
// const user2 = user;

// user.age = 18;
// user2.name = "Ivan";
// console.log(user);
// console.log(user2);

// 1 Object.assign
// const user = { name: "Alex" };

// const user2 = Object.assign({}, user);

// user.age = "18";
// user2.name = "Ivan";

// console.log(user);
// console.log(user2);

// 2 spread оператор ...
// const arr = [1, 2, 3];

// const arr2 = [...arr];

// arr.push(4);

// console.log(arr);
// console.log(arr2);

// const arr = [1, 2, 3, 4];

// const arrPush = (arr) => {
//   const arrNew = [...arr];
//   arrNew.push(5);
// };

// console.log(arr, "One");
// arrPush(arr);
// console.log(arr, "Two");

// console.log(JSON.stringify(user), user);

// 3 JSON.parse(JSON.stringify())
// const user = { name: "Alex", age: 18 };
// const user2 = JSON.parse(JSON.stringify(user));
// user.name = "Ivan";
// user2.age = 20;

// console.log(user);
// console.log(user2);

// 4 rest оператор
// const infinitySum = (... args) => {
//     return args.reduce((prev, curr) => prev + curr, 0)
// }

// console.log(infinitySum(1,23, 9));

// const user = { name: "Alex", age: "18", city: "London" };

// const userName = user.name;
// const userAge = user.age;
// console.log(userName, "UserName");

// const { name, ...restParams } = user;
// console.log(name, "name");
// console.log(restParams, "restParams");

// for of
// const arraySum = (arr) => {
//   let result = 0;
//   for (let value of arr) {
//     result += value;
//   }
//   return result;
// };

// console.log(arraySum([1, 2, 3, 4, 5, 6, 7, 8]));

// for in переход по ключам
// const arr = ['Ivan', 'Alex', 'Tony']
// const obj = {name: 'Alex', age:18}

// for(let value in obj){
//     console.log(obj[value])
// }

//practice
// 1

const obj = [1, 2, 3];
const objCopyAssign = Object.assign([], obj);
const objCopySpreed = [...obj];

// console.log(obj, "obj1 before");
// console.log(objCopyAssign, "obj1Assign before");
// console.log(objCopySpreed, "obj1Spreed before");

objCopyAssign.push(7);
objCopySpreed.push(8);

// console.log(obj, "obj1 after");
// console.log(objCopyAssign, "obj1Assign after");
// console.log(objCopySpreed, "obj1Spreed after");

//2
const sumEven = (...args) => {
  let result = 0;
  for (let elem of args) {
    if (elem % 2 === 0) {
      result += elem;
    }
  }
  return result;
};

// console.log(sumEven(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//3
const arrElementEquals = (arr1, arr2) => {
  let result = [];
  for (let elem1 of arr1) {
    for (let elem2 of arr2) {
      if (elem1 === elem2) {
        result.push(elem1);
        arr1.shift(elem1);
      }
    }
  }
  return result;
};

// console.log(
//   arrElementEquals(
//     [1, 5, 3, 5, 6, 74, 66, 55, 44],
//     [5, 4, 75, 74, 44, 222, 2, 1231]
//   )
// );

//Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const sumSeven = (arr) => {
  const result = [];
  for (let i of arr) {
    for (let j of arr) {
      if (i + j === 7 && !result.includes(`${j}:${i}`)) {
        result.push(`${i}:${j}`);
      }
    }
  }
  return result;
};

//console.log(sumSeven(arr));

//Напишите код, создающий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.
const str = "JavaScript";

const strSymbols = (str) => {
  const result = [];
  const { length } = str;

  for (let i = 0; i < length; i += 1) {
    if (i === 0) {
      result.push(str.slice(0, 2));
    } else if (i === length - 1) {
      result.push(str.slice(-2));
    } else {
      result.push(str.slice(i - 1, i + 2));
    }
  }
  return result;
};

//console.log(strSymbols(str));

const user = { name: "Alex", age: "26", city: "26" };

const userName = user.name;
const { name, ...resObj } = user;

//Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.

const arr1 = [1, 2, 3];
const arr2 = [7, 8, 9];
const arr3 = [4, 5, 6];

const sortArr = (arr1, arr2, arr3) =>
  [...arr1, ...arr2, ...arr3]
    .sort((a, b) => b - a)
    .join(" ")
    .split();

// console.log(sortArr(arr1, arr2, arr3));

//Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

const arrReverce = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const customReverce = (arrReverce) => {
  const result = [];

  for (let value of arrReverce) {
    result.unshift(value);
  }
  return result;
};

// console.log(customReverce(arrReverce));
//Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

const arrSum10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sumMoreTen = (arrSum10) => {
  let lastIndex = 0;
  arrSum10.reduce((prev, cur, i) => {
    if (prev + cur <= 10) {
      lastIndex = i;
      return prev + cur;
    }
  }, 0);
  if (lastIndex === 0) {
    return lastIndex + 1;
  }
  if (typeof lastIndex === "undefined") {
    return 1;
  }
  return lastIndex + 2;
};
// console.log(sumMoreTen(arrSum10));

//Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

const number = [2, 3, 5, 7, 11, 13, 17];

const currentSumNumber = (arr) => {
  const result = [];

  arr.reduce((prev, cur) => {
    result.push(prev + cur);
    return prev + cur;
  }, 0);
  return result;
};

// console.log(currentSumNumber(number));

//homework

//1 Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

const arrayStringLenght = (arr) => {
  arrLenght = [];
  arr.map((e) => {
    arrLenght.push(e.length);
  });
  return arrLenght;
};

// console.log(arrayStringLenght(["привет", "как", "ты"]));

//2 Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

const numbers = [2, 3, 5, 7, 11, 13, 17];

const currentSumsHome = (n) => {
  const initialValue = 0;
  const result = [];
  n.reduce((previousValue, currentValue) => {
    result.push(previousValue + currentValue);
    return previousValue + currentValue;
  }, initialValue);
  return result;
};

// console.log(currentSumsHome(numbers));

// 3 Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

const equalsSeven = (arrNumber) => {
  const result = [];
  for (const i of arrNumber) {
    for (const j of arrNumber) {
      if (i + j === 7 && !result.includes(`${j}:${i}`))
        result.push(`${i}:${j}`);
    }
  }
  return result;
};

// console.log(equalsSeven([1,2,3,4,5,6,7,8,9,10,23,1,2,3,4,1,2]));

// 4 Напишите код, создающий массив, который будет состоять из первых букв слов строки str.

const firstSymbols = (str) => {
  const splitStr = str.split(" ");
  const result = [];

  for (const iterator of splitStr) {
    result.push(iterator[0]);
  }
  return result;
};

// console.log(firstSymbols("привет я тута, беру первые буквы"));

//5 Напишите код, создающий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.

const strHome = "JavaScript";

const strSymbolsHome = (str) => {
  const result = [];
  const { length } = str;

  for (let i = 0; i < length; i += 1) {
    if (i === 0) {
      result.push(str.slice(0, 2));
    } else if (i === length - 1) {
      result.push(str.slice(-2));
    } else {
      result.push(str.slice(i - 1, i + 2));
    }
  }
  return result;
};

// console.log(strSymbolsHome(strHome));

//6 Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.
const numberArr = (arr) => {
  let result = arr.sort(function (a, b) {
    return a - b;
  });
  console.log(result);
};

// numberArr([1, -4, 3, -5, 65]);

//7 Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.
const arr1Home = [1, 2, 3];
const arr2Home = [7, 8, 9];
const arr3Home = [4, 5, 6];

const sortArrHome = (arr1, arr2, arr3) =>
  [...arr1, ...arr2, ...arr3]
    .sort((a, b) => b - a)
    .join(" ")
    .split();

//    console.log(sortArrHome(arr1Home, arr2Home, arr3Home));

//8 Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
const sum2Array = (arr) => {
  let sum = 0;
  arr = arr.flat(Infinity);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
};

// sum2Array([[1, 2, 3], [4, 5], [6]])

// 9 Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

const reverseMy = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.unshift(arr[i]);
  }
  return result;
};

// console.log(reverseMy([3,4,3,21,2,1,21]));

// 10 Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
const lessTen = (arr) => {
  let currentSum = 0;
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (currentSum <= 10) {
      currentSum += arr[i];
      index = i;
    }
  }
  return index + 1;
};

// console.log(lessTen([11, 2, 3, 4, 5, 6]));

// 11 Напишите функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

const arrayFill = (str, value) => {
  const arr = [];
  for (let i = 1; i <= value; i++) {
    arr.push(str);
  }
  return arr;
};

// console.log(arrayFill("str", 6));
