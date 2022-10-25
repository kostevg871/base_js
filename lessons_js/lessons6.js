// lessons 6
// Примитивы, обьекты

const key = "name";

const person = {
  [key]: "Alex",
  sayHello: function () {
    console.log("Hello");
  },
};
// console.log(person);

person.age = 56;

person["city-name"] = "NN";
// console.log(person);

// console.log(person.name);
// console.log(person["city-name"]);

// console.log(person.age);
person.age = "26";
// console.log(person.age);

delete person.age;
// console.log(person.age);

// person.sayHello();

//practice

myFavoriteFilm = {
  name: "shrek",
  date: "2005",
  nameAuthor: "Domink Torrento",
  city: "Russia",
};

// console.log(myFavoriteFilm);

myFavoriteFilm.cash = "50000$";

// console.log(myFavoriteFilm);

myFavoriteFilm.printName = function () {
  console.log(myFavoriteFilm.name);
};

// console.log(myFavoriteFilm);

delete myFavoriteFilm.date;

// console.log(myFavoriteFilm);

// myFavoriteFilm.printName()

const number = "100";

// console.log(number.toString());

const str = "hello world";
str[0] = "H";
// console.log(str);

// practice
const reg = (str, n) => {
  if (n > str.length) {
    return "Ошибка";
  }
  if (str[n] === str[n].toUpperCase()) {
    return true;
  }
  return false;
};

// console.log(reg("Привет", 90));
// console.log(reg("ПРивет", 2));



const replaceStr = (str, find, replace) => {
   
};

console.log(replaceStr("Приветdaствую da вас da люди", "da", "!"));