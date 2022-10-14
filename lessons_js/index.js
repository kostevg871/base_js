// console.log("Hello world!");

// const ourPlanetName = "Земля";

// console.log(ourPlanetName);

// let currentTime = 18.0;

// let countOfArticles = 0;
// let isCash = true;
// let firstName = "Evgeniy";
// let surName = "Petrovich";
// let lastName = "Ivanov";

// // console.log(currentTime);
// // console.log(countOfArticles);
// // console.log(isCash);
// // console.log(firstName);
// // console.log(surName);
// // console.log(lastName);

// const nameFirst = "Sobaka";

// const age = 15;

// const userDataName = `имя пользователя ${nameFirst}, возраст ${age}`;

// const userDataNew = "имя пользователя ${nameFirst}, возраст ${age}";
// console.log(userDataName);

// //Комментарии однострочный

// const isVisble = true;

// /* многострочный комментарий
// const isVisbleFalse = false;
// */

// // null - ничего
// let userName = null;

// //undefined - неопределенность, не присвоенно значение
// let townName;

// console.log(townName);

// townName = "Moscow";
// console.log(townName);

/*
обьекты являются ссылочными типами данных 
остальные примитивными типами данных 
*/

// const userData = {
//   name: "Ivan",
//   age: 34,
// };

// console.log(userData);

// console.log(typeof userData.age);

// console.log(typeof userData);

// const num = 1234567890123456789n;
// console.log(num);

// console.log(typeof userData.name);

// console.log("ivan" / 4);

console.log(typeof Number("123zxc") === "number");

const name = "Alex";
const nameToNumber = Number(name);
console.log(nameToNumber);

const age = 26;
const ageToString = String(age);
console.log(typeof ageToString);

const nullValue = null;
console.log(Number(nullValue));

console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean({}));

console.log(1 + "000");

console.log(2 == "2");

console.log(3 == "3");
console.log(1 === "3");

// practice
console.log("ананас" > "яблоко");
console.log("2" > "12");
console.log(null == "null");
console.log("" + 1 + 0);
console.log("$" + 5 + 5);
console.log("4px" - 2);
console.log(7 / 0);
console.log(null + 1);
console.log(undefined + 1);
console.log("\t\n" - 2);

const array = ["Shrek", "Shrek 2", "Shrek 3", "Shrek 4"];
console.log(array[0]);
array.push("Shrek forever");
console.log(array[array.length - 1]);

//home lessons 3
console.log("кот" > "код"); //false - true
console.log("2" + 2 * "2"); //24 +
console.log(undefined == null); // true +
console.log(undefined != null); // false +
console.log(null == 0); // false +
console.log(2 > "3"); //false +
console.log(null - false + true); // 1  +
console.log(1 / "1"); // 1  +
console.log("2" * "3"); // 6 +
console.log(4 + 5 + "O"); // "9o" +
console.log("1" + 4 + 5); //145 +
console.log("4" - 2); // 2 +
console.log("4" - "4x"); //NaN +
console.log("23" == 23); // true +
console.log(null == false); //false +
console.log(" -4 " / 0 + 1); // -infinity +
console.log(null + 1); //1 +
console.log(undefined + null); // 1 - Nan
console.log(1 === "1"); //true - false
console.log("2" > 10); // false +
console.log(NaN == undefined); // true - false
