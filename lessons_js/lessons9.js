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
    console.log(this.name);
    return this.name;
  },
  getPopulation: function () {
    console.log(this.population);
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

const user1 = {name: "Vasia", surName: "Ivanov"}
const user2 = {name: "Vasia", surName: "Semenov"}

function greeting(phrase, smile) {
    console.log(`${this.name} ${this.surName} : ${phrase} : ${smile}`);
}

// greeting.call(user1, "Привет", "^_^")
// greeting.call(user2, "Hello", "*_*");
// greeting.apply(user2, ["Hello", "*_*"]);

const greetingUser1 = greeting.bind(user1)
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

console.log(townTwo);