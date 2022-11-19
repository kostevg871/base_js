const user = {
  name: "Vasia",
};

// console.log(user);

const arr = [1, 2];

// console.log(arr);
// console.log(new String());

const russian = {
  country: "Russia",
  city: "NN",
};

const people = {
  name: "Alex",
  age: "26",
  __proto__: russian,
};

// console.log(people.city, people);

const nameEx = "Jeka";

const user10 = {
  name: nameEx,
};

const { name } = user;

// console.log(user10);

// функции конструкторы

function CreateUser(name, age) {
  this.name = name;
  this.age = age;
}

// let firstUser = new CreateUser("Ivan", "age");

function CreateUserExample(userName, userAge) {
  this.name = userName;
  this.age = userAge;
}

let firstUser = new CreateUserExample("Ivan", 27);
let secondUser = new CreateUserExample("Jeka", 36);

// console.log(firstUser, secondUser);

