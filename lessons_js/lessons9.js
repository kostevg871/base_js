// console.log(this);

// var TEST = "TEST"

// function test() {
//   console.log(this);
// }

// test();

const persona = {
  name: "Alex",
  age: "26",
  getName: function () {
    // console.log(this.name);
  },
};

persona.getName();

const town = {
  name: "Moscow",
  population: "25 mil",
  getName: function () {
    // console.log(this.name);
    return this.name;
  },
  getPopulation: function () {
    // console.log(this.population);
    return this.getPopulation;
  },
  setAnyValue: function (key, value) {
    this[key] = value;
  },
};

// town.getName();
// town.setAnyValue("name", "London");
// town.getName();
// town.setAnyValue("country", "UK");
// console.log(town);

const user1 = { name: "Vasia", surName: "Ivanov" };
const user2 = { name: "Vasia", surName: "Semenov" };

function greeting(phrase, smile) {
  // console.log(`${this.name} ${this.surName} : ${phrase} : ${smile}`);
}

// greeting.call(user1, "Привет", "^_^")
// greeting.call(user2, "Hello", "*_*");
// greeting.apply(user2, ["Hello", "*_*"]);

const greetingUser1 = greeting.bind(user1);
// greetingUser1("Привет", "^_^");
// greetingUser1("Hi", "&_&");
// greetingUser1();

//  практика 2 часть: Создайте второй объект описывающий город (первый возьмите из решения задачи №1). Второй объект должен содержать только свойства названия и численность.
// Используя метод call() / apply() вызовите методы объекта первого города в контексте объекта второго города.
// Используя метод bind(), изменить свойства объекта второго города на произвольные значения.

const townTwo = {
  name: "London",
  population: "5 mln",
};

// console.log(townTwo);

town.getName();
town.getPopulation();
town.getName.call(townTwo);
town.getPopulation.call(townTwo);

const bound = town.setAnyValue.bind(townTwo);

bound("name", "Paris");
bound("country", "France");

// console.log(townTwo);

// 1. Что выведет функция?

function f() {
 alert(this);
}

let userh1 = {
 g: f.bind(null),
};

// userh1.g();

// 2  Можем ли мы изменить this дополнительным связыванием?
// function f() {
//  alert(this.name);
// }

// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

// f();

// 3 В свойство функции записано значение. Изменится ли оно после применения bind?
function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

let boundhome = sayHi.bind({
  name: "Вася",
});

// console.log( boundhome.test );
// sayHi.call({name: "vasia"})

// 4. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "Вася",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// 5 Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let userh = {
  name: "John",

  login(result) {
    alert(this.name + (result ? " logged in" : " failed to log in"));
  },
};

// askPassword(userh.login.bind(user, true), userh.login.bind(user, false));

// 6 Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value.

let elem = { value: "Привет" };

function func(surname, name) {
  alert(this.value + ", " + surname + " " + name);
}

//Тут напишите конструкцию с bind()

// func = func.bind(elem);

// func("Иванов", "Иван"); //тут должно вывести 'привет, Иванов Иван'
// func("Петров", "Петр"); //тут должно вывести 'привет, Петров Петр'

// 7 Eсть функция const sum = (a, b, c) => a + b + c, которая складывает три числа.из переменной elem.
// var elem = {value: ‘Привет’}

// function func(surname, name) {
// alert(this.value + ', ' + surname + ' ' + name);
// }

// let func = func.bind(elem)
// //Тут напишите конструкцию с bind()

// func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
// func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'

// Есть функция которая складывает три числа.Выполните каррирование.
// const sum = (a, b, c) => a + b + c

// Реализовать таймер-функцию используя замыкания. Функция принимает два  аргумента начальное значение и значение завершения. Таймер движется назад.При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера.

// */

// // function example() {
// //   console.log(this);
// // }
// // example();

// // function example() {
// //   console.log(this);
// // }
// // const testObject = {
// //   testMethod: example,
// // };
// // testObject.testMethod();

// const object = {
//   name: "NN",
//   population: "2 mil",
//   getFunction: function (key, str) {
//     this[key] = str;
//   },
// };

// let userP = { name: "Вася" };
// let userPr2 = { name: "Петя" };
// // function say(phrase){console.log(`${this.name} : ${phrase} `)};

// // say.call(userP, "ghbd")

// function f() {
//   console.log(this);
// }

// let user = {
//   g: f.bind(null),
// };

// //  user.g();

// //global

// function f() {
//   console.log(this.name);
// }

// let ver1 = f.bind({ name: "Вася" });

// let g = f.bind({ name: "Петя" });

// //  ver1();
// //  g();

// let userhome = { name: "Вася" };
// function say(phrase) {
//   // console.log(`${this.name} : ${phrase} `);
// }

// // let sayBoundVersionOne = say.bind(userhome);
// // sayBoundVersionOne("Привет"); // Вася : Привет
// // let sayBoundVersionTwo = say.bind(userhome, "Пока");
// // sayBoundVersionTwo(); // Вася : Пока

// function sayHi() {
//   console.log( this.name );
//  }
//  sayHi.test = 5;

//  sayHi()

//  let boundhome = sayHi.bind({
//   name: "Вася"
//  });

//  console.log( bound.test );
