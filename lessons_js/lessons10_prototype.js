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

// const firstWorker = new Worker("Alex", "Petrov", 500, 20);
// console.log(firstWorker.getFullName());
// console.log(firstWorker.getSallary());

//homeworks

//1
// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия),
// rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
// который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
//  И метод getFullName() - имя и фамиля работника.

class WorkerHome {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalar() {
    console.log(`${this.rate * this.days}`);
  }

  getFullNameHome() {
    console.log(`${this.name + " " + this.surname}`);
  }
}
const homeWorkerExample = new WorkerHome("jeka", "ivanov", 25, 30);

// console.log(homeWorkerExample);
// let homeWorkerSecond = homeWorkerExample.getFullNameHome();
// let homeWorker = homeWorkerExample.getSalar();

//2
// Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания.
// Появляется новые свойство: workers - количество работников.
//  И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и на количество работников.

class Boss extends WorkerHome {
  constructor(name, surname, rate, days, workers) {
    super(name, surname, rate, days);
    this.workers = workers;
  }
  bossSallary() {
    console.log(
      `${this.name} ${this.surname}: sallary = ${
        this.rate * this.days * this.workers
      }`
    );
  }
}

// const boss1 = new Boss("Albert", "Petrenko", 150, 21, 10);
// console.log(boss1);
// boss1.bossSallary();

//3
// Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и
//  для свойства days сделайте и методы-сеттеры и методы-геттеры для их чтения.

class BossModify extends Boss {
  constructor(name, surname, rate, days, workers) {
    super(name, surname, rate, days, workers);
  }

  get rate() {
    return `get rate: ${this._rate}`;
  }

  get days() {
    return `get days: ${this._days}`;
  }

  set rate(rate) {
    this._rate = rate;
  }

  set days(days) {
    this._days = days;
  }

  bossSallary() {
    console.log(
      `${this.name} ${this.surname}: sallary = ${
        this.rate * this.days * this.workers
      }`
    );
  }
}

// const boss = new BossModify("Albert", "Petrenko", 150, 21, 10);

// console.log(boss);
// console.log(boss.rate);
// console.log(boss.days);
// boss._days = 10;
// boss._rate = 300;
// console.log(boss);

// 4
// Реализуйте класс MyString, который будет иметь следующие методы:
//  метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
//  который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords,
//  который принимает строку и делает заглавной первую букву каждого слова этой строки.

class MyString {
  constructor() {}

  reverse(string) {
    let reversStr = "";
    for (let i = string.length - 1; i >= 0; i--) {
      reversStr += string[i];
    }
    return reversStr;
  }

  usFirst(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  ucWords(string) {
    let result = [];
    string.split(" ").forEach((element) => {
      result.push(element[0].toUpperCase() + element.slice(1));
    });
    return result.join(" ");
  }
}

// let str = new MyString();
// console.log(str.reverse("Albert"));
// console.log(str.usFirst("albert"));
// console.log(str.ucWords("albert valera"));

//5
// Реализуйте класс Validator, который будет проверять строки.
//  К примеру, у него будет метод isEmail параметром принимает строку и проверяет,
//  является ли она корректным емейлом или нет. Если является - возвращает true,
//  если не является - то false. Кроме того, класс будет иметь следующие методы:
//  метод isDomain для проверки домена, метод isDate для проверки даты и метод
//  isPhone для проверки телефона.

class Validator {
  constructor() {}
  isEmail(str) {
    if (str.includes("@") !== -1 && str.includes(".") !== -1) {
      let strArr = str.split("@");
      if (strArr[1].includes(".")) {
        return true;
      } else return false;
    }
  }
  isDomain(str) {
    return str.includes(".com") || str.includes(".ru") || str.includes(".net");
  }
  isDate(str) {
    return Date.parse(str) ? true : false;
  }

  isPhone(str) {
    let phone = str.match(
      /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
    );
    return phone === null ? false : true;
  }
}
// let validator = new Validator();
// console.log(validator.isEmail("test@gmail.com"));
// console.log(validator.isEmail("test.gmail@com"));
// console.log(validator.isDomain("test.net"));
// console.log(validator.isDate("09.12.2021"));
// console.log(validator.isPhone("8 (096) 23-14-014"));

//6
// Реализуйте класс Student (Студент), который будет наследовать от класса User,
// подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства:
// name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз).
//  Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента.
//  акже класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
//  Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно с помощью new Date.

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    console.log(`${this.name} ${this.surname}`);
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  getCurse() {
    const now = new Date();
    return now.getFullYear() - this.year;
  }
}

const studentFirst = new Student("Evgen", "Petrov", 2012);
console.log(studentFirst);
studentFirst.getFullName();
console.log(studentFirst.getCurse());
