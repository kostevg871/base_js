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

//13 Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

const repeatStr = (str, n) => {
  return str.repeat(n);
};

// console.log(repeatStr("Lol ", 5));

//14 Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

const path = (pathname) => {
  let name = pathname.split("/").pop();
  return name;
};

// console.log(path(`C://Users/Jeka_/Desktop/js_learn/js/lessons_js`));

// 15 Создайте функцию endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

const endsWith = (str, str1) => {
  const lenAll = str.length - str1.length;
  if (lenAll >= 0) {
    if (str.slice(-str1.length) == str1) {
      return true;
    }
  }
  return false;
};

// console.log(endsWith("каждый знает", "ый знает"));

//16 Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

const getSubstr = (str, char, pos) => {
  const index = str.indexOf(char);
  if (pos > 0) {
    return str.substring(index + 1, index + pos);
  } else {
    return str.substring(index, index + pos - 1);
  }
};

// console.log(getSubstr("привет", "в", -3));

// 17 Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

const insert = (str, substr, pos = 0) => {
  let array = str.split("");
  array.splice(pos, 0, substr);
  return array.join("");
};

// console.log(insert("Привет", "Вася"));
// console.log(insert("Привет", "Вася", 3));
// console.log(insert("Привет", "Вася", 6));

// 18 Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

const limitStr = (str, n, symb = "...") => {
  if (str.length > n) {
    const slStr = str.slice(0, n);
    return insert(slStr, symb, n);
  } else {
    return str;
  }
};

// console.log(limitStr("Напишите функцию", 5));
// console.log(limitStr("Напишите функцию", 100));
// console.log(limitStr("Напишите функцию", 11, "?"));

// 19 Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

const count = (str, stringsearch) => {
  let countIter = 0;
  for (const iterator of stringsearch) {
    str.includes(iterator) ? countIter++ : countIter + 0;
  }
  return countIter;
};

// console.log(count("Привет", "вер"));

// 20 Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

const strip = (str) => {
  return str.trim().replace(/\s+/g, " ");
};

// console.log(strip("  lo    l "))

// 21 Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

const cutString = (strCut, n) => {
  return strCut.split(" ").splice(0, n).join(" ");
};
// console.log(cutString("seaeae asease asease sfdfds dfsdfs", 2));

// 22 Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

const findWord = (word, str) => {
  const arrayWord = word.split(" ");
  for (const wordOfArray of arrayWord) {
    if (!str.includes(wordOfArray)) {
      return false;
    }
  }
  return true;
};

// console.log(findWord("привет я ты мы", "ямыпривет"));