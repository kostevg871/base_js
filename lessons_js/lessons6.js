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

//homework

//1 Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

const stringToArray = (str) => {
  return str.split(" ");
};

//console.log(stringToArray("lol lal lol"));

//2 Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

const deleteCharacters = (str, length) => {
  return str.substring(0, length);
};

//console.log(deleteCharacters('Напишите функцию deleteСharacte', 1));

//3 Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

function insertDash(str) {
  return str.replaceAll(" ", "-").toUpperCase();
}

// console.log(
//   insertDash(
//     "Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр."
//   )
// );

//4 Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

const upperFirstString = (str) => {
  let result = `${str[0].toUpperCase()}${str.substring(1)}`;
  return result;
};

// console.log(upperFirstString("опишите функцию"));

// 5 Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.
const capitalize = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => upperFirstString(word))
    .join(" ");
};

// console.log(
//   capitalize(
//     "Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы."
//   )
// );

// 6 Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

const changeRegister = (str) => {
  const arrayStr = [];
  for (let i = 0; i <= str.length; i++) {
    if (str.charAt(i).toUpperCase() == str.charAt(i)) {
      arrayStr.push(str.charAt(i).toLowerCase());
    } else {
      arrayStr.push(str.charAt(i).toUpperCase());
    }
  }
  return arrayStr.join(" ");
};

// console.log(
//   changeRegister("КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк")
// );

//7 Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

const removeChar = (str) => {
  return str.replace(/[^A-Za-z0-9 ]/g, "");
};

// console.log(removeChar("1,.   0fkdnSSSiro-+-+___"));

// 8 Напишите функцию zeros(num, len), которая дополняет нулями до указанной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента.

const zeros = (num, len, sign = "") => {
  const zeroCount = parseInt(len - num.toString().length);
  if (zeroCount > 0) {
    return `${sign}${"0".repeat(zeroCount)}${num}`;
  } else {
    return `${sign}${num}`;
  }
};

// console.log(zeros(2324, 10, "+"));
// console.log(zeros(2324, 0, "-"));
// console.log(zeros(2324, 18, "-"));

//9 Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.
const comparison = (str1, str2) => {
  if (str1.toString().toLowerCase() === str2.toString().toLowerCase()) {
    return "Равны";
  } else {
    return "не равны";
  }
};

// console.log(comparison("1234Gfsdsd", "1234gFsdsd"));

// 10 Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.

const insensitiveSearch = (str1, str2) => {
  if (str1.toLowerCase().includes(str2.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

// console.log(insensitiveSearch("QWERty","wertys"));

// 11 Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

const initCap = (str) => {
  const strLow = str.toLowerCase();
  const resultArr = [];
  resultArr.push(strLow[0].toUpperCase());
  for (let i = 1; i < strLow.length; i++) {
    if (strLow.charAt(i) === " ") {
      resultArr.push(strLow.charAt(i + 1).toUpperCase());
      i++;
    } else {
      resultArr.push(strLow.charAt(i));
    }
  }
  return resultArr.join("");
};

// console.log(initCap("sAdsasd SD zxSSS"));

// 12 Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

const initSnake = (str) => {
  const resultArr = [];
  resultArr.push(str.charAt(0).toLowerCase());
  for (let index = 1; index < str.length; index++) {
    if (str.charAt(index) === " ") {
      resultArr.push(str.charAt(index));
      index++;
      resultArr.push(str.charAt(index).toLowerCase());
    } else if (str.charAt(index) === `${str.charAt(index).toUpperCase()}`) {
      resultArr.push(`_${str.charAt(index).toLowerCase()}`);
    } else {
      resultArr.push(str.charAt(index));
    }
  }
  return resultArr.join("");
};

// console.log(initSnake("CamelCase CamelCase"));
