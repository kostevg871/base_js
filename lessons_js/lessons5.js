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

let polindrome = function (strPolin) {
  for (let i = 0; i <= strPolin.length / 2; i++) {
    if (strPolin[i] !== strPolin[strPolin.length - i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(polindrome("топот"));
console.log(polindrome("баклажан"));

//homework
//1
const returnQuadro = (a) => a ** 2;
console.log(returnQuadro(5));
//2
const sum = (a, b) => a + b;
console.log(sum(5, 6));
//3
const sumTree = (a, b, c) => a - b / c;
console.log(sumTree(2, 2, 2));
//4