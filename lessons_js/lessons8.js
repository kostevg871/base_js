const number = 1;

const increment = (a) => {
  //   console.log(a, "before");
  a += 1;
  //   console.log(a, "after");
};

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

const arr = [1, 2, 3, 4];

const arrPush = (arr) => {
  const arrNew = [...arr];
  arrNew.push(5);
};

// console.log(arr, "One");
// arrPush(arr);
// console.log(arr, "Two");

// console.log(JSON.stringify(user), user);

// 3 JSON.parse(JSON.stringify())
const user = { name: "Alex", age: 18 };
const user2 = JSON.parse(JSON.stringify(user));
user.name = "Ivan";
user2.age = 20;

console.log(user);
console.log(user2);
