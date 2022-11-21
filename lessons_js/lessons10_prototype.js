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

  this.sayHi = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}

CreateUserExample.prototype.sayAge = function () {
  console.log(`Hello, my age is ${this.age}`);
};

let firstUser = new CreateUserExample("Ivan", 27);
let secondUser = new CreateUserExample("Jeka", 36);

// console.log(firstUser, secondUser);

// firstUser.sayHi()

// secondUser.sayAge();

function CreateSend(from, to) {
  this.from = from;
  this.to = to;

  this.show = function () {
    console.log(`from ${this.from} to ${this.to}`);
  };
}

let firstSend = new CreateSend("Moscow", "NN");
let secondSend = new CreateSend("NN", "Paris");

// console.log(firstSend);
// secondSend.show();

CreateSend.prototype.fromChange = function (from) {
  this.from = from;
};

// console.log(firstSend.from);
// firstSend.fromChange("Argentina");
// console.log(firstSend.from);

// Классы

class Parent {
  constructor(name) {
    this.name = name;
  }

  sayHiClass() {
    console.log("My name" + this.name);
  }
}

class People {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

const firstPeople = new People("Alex", "Ivanov");
// console.log(firstPeople.getFullName());

class Worker extends People {
  constructor(name, surname, rate, day) {
    super(name, surname);
    this.rate = rate;
    this.day = day;
  }
  getSallary() {
    return `${this.getFullName()} получил ${this.rate * this.day}`;
  }
}

const firstWorker = new Worker("Alex", "Petrov", 500, 20);
console.log(firstWorker.getFullName());
console.log(firstWorker.getSallary());
