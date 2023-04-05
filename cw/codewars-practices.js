// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters
// then it should replace the missing second character of the final pair with an underscore ('_').

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

const solution = (str) => {
  const arr = str.split("");
  const result = [];

  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i + 1]) result.push(arr[i] + arr[i + 1]);
    else result.push(arr[i] + "_");
  }
  return result;
};

// console.log(solution('abcasesess'));

function solution2(str) {
  let i = 0;
  let arr = [];
  if (str.length % 2 !== 0) {
    str = str + "_";
  }
  while (i < str.length) {
    arr.push(str[i] + str[i + 1]);
    i += 2;
  }
  return arr;
}

// console.log(solution2("abcaseses"));

// Завершите решение так, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается вторым аргументом (тоже строкой).

//solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution3(str, ending) {
  const endingStr = ending.length;

  if (endingStr === 0 || str.slice(-endingStr) === ending) {
    return true;
  } else {
    return false;
  }
}

// console.log(solution3("abc", ""));

//Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает ту же строку, но с перевернутыми всеми словами из пяти или более букв (точно так же, как имя этого Ката). Передаваемые строки будут состоять только из букв и пробелов. Пробелы будут включены только в том случае, если присутствует более одного слова.

function spinWords(string) {
  const result = [];
  const stringArr = string.split(" ");
  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i].length >= 5) {
      result.push(stringArr[i].split("").reverse().join(""));
    } else {
      result.push(stringArr[i]);
    }
  }
  return result.join(" ");
}

// console.log(spinWords("Hey fellow warriors"));

//Дан массив целых чисел, найдите то, которое встречается нечетное количество раз.
// Всегда будет только одно целое число, которое встречается нечетное количество раз.

function findOdd(A) {
  const arraySize = A.length;
  for (let i = 0; i <= arraySize; i++) {
    let count = 0;
    for (let j = 0; j <= arraySize; j++) {
      if (A[i] == A[j]) {
        count++;
      }
    }
    if (count % 2 != 0) {
      return A[i];
    }
  }
}

// console.log(findOdd([1,2,3,2,1,2,3,2,1,2]));

function findOdd2(A) {
  return A.reduce((a, b) => a ^ b);
}
// console.log(findOdd2([1, 2, 3, 2, 1, 2, 3, 2, 1, 2]));

A = [1, 2, 3, 2, 1, 2, 3, 2, 1, 2];
const findOdd3 = (A) => A.sort((a, b) => a - b).reduce((a, b) => b - a);
// console.log(A.sort((a, b) => a - b));

function filter_list(l) {
  const result = [];
  for (const iterator of l) {
    if (typeof iterator === "number") {
      result.push(iterator);
    }
  }
  return result;
}

// console.log(filter_list([1, "a", "b", 2, 3, 4]));

// Ваша цель в этом ката — реализовать функцию разности, которая вычитает один список из другого и возвращает результат.
// Он должен удалить из списка все значения a, которые присутствуют в списке b, сохраняя их порядок.

function arrayDiff(a, b) {
  let result = [];
  for (const iteratorA of a) {
    if (!b.includes(iteratorA)) {
      result.push(iteratorA);
    }
  }
  return result;
}

// console.log(arrayDiff([1, 2, 3], [1, 2])); //[3]

// Вы, наверное, знаете систему «лайков» из Facebook и других страниц. Люди могут «лайкать» сообщения в блогах, изображения
// или другие элементы. Мы хотим создать текст, который должен отображаться рядом с таким элементом.

// Реализуйте функцию, которая принимает массив, содержащий имена людей, которым понравился элемент. Он должен возвращать отображаемый
// текст, как показано в примерах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//6
function likes(names) {
  let result;
  switch (names.length) {
    case 0:
      result = "no one likes this";
      break;
    case 1:
      result = `${names.join()} likes this`;
      break;
    case 2:
      result = `${names.join(" and ")} like this`;
      break;
    case 3:
      result = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      result = `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
      break;
  }
  return result;
}

// console.log(likes(["Peter"]));

//7
// Подсчитайте количество дубликатов
// Напишите функцию, которая будет возвращать количество различных буквенных символов и цифр,
// не зависящих от регистра, которые встречаются во входной строке более одного раза.
// Можно предположить, что входная строка содержит только буквы (как прописные, так и строчные) и числовые цифры.

function duplicateCount(text) {
  let count = 0;
  text = text.toUpperCase();
  let unicText = text
    .split("")
    .filter((element, index) => {
      return text.indexOf(element) === index;
    })
    .join("");

  for (const iterator of unicText) {
    if (text.split(iterator).length - 1 > 1) {
      count++;
    }
  }
  return count;
}

// console.log(duplicateCount("aabBcDe11"));

// 8
// Напишите функцию, которая принимает строку скобок и определяет, допустим ли порядок скобок.
// Функция должна возвращать trueзначение, если строка действительна и falseнедействительна.

function validParentheses(parens) {
  let countOpen = 0;
  for (const iterator of parens) {
    if (iterator === "(") {
      countOpen++;
    } else {
      countOpen = countOpen - 1;
    }
    if (countOpen < 0) {
      return false;
    }
  }
  if (countOpen !== 0) return false;
  return true;
}

// console.log(validParentheses("(())((()())())"));

//9

// Формат для выражения упорядоченного списка целых чисел заключается в использовании списка, разделенного запятыми, либо
// отдельные целые числа
// или диапазон целых чисел, обозначенный начальным целым числом, отделенным от конечного целого числа в диапазоне дефисом «-».
// Диапазон включает все целые числа в интервале, включая обе конечные точки. Он не считается диапазоном, если он не охватывает как минимум 3 числа.
// Например "12,13,15-17"
// // Завершите решение так, чтобы оно принимало список целых чисел в порядке возрастания и возвращало правильно отформатированную строку в
// формате диапазона.

// Пример:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

function solution1(list) {
  let result = [];
  let slice = [];
  for (let i = 0; i <= list.length - 1; i++) {
    if (list[i + 1] === list[i] + 1) {
      slice.push(list[i]);
    } else if (slice.length >= 2) {
      let stringSlice = `${slice[0]}-${list[i]}`;
      result.push(stringSlice);
      slice = [];
    } else if (slice.length < 2 && slice.length !== 0) {
      slice.push(list[i]);
      result.push(slice.join(","));
      slice = [];
    } else {
      result.push(list[i]);
    }
  }
  return result.join(",");
}

// console.log(
//   solution1([
//     -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
//   ])
// );

//10
// Мой друг Джон и я являемся членами «Fat to Fit Club (FFC)». Джон беспокоится, потому что
// каждый месяц публикуется список с весами участников, и каждый месяц он последний в списке, что означает, что он самый тяжелый.
// Я тот, кто составляет список, поэтому я сказал ему: «Не волнуйся больше, я изменю порядок списка». Было решено приписать числам «вес».
//  Отныне вес числа будет равен сумме его цифр.
// Например 99будет иметь "вес" 18, 100будет иметь "вес" 1так что в списке 100будет стоять раньше 99.
// Учитывая строку с весами членов FFC в нормальном порядке, можете ли вы отсортировать эту строку по «весам» этих чисел?
// Пример:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:
// "100 180 90 56 65 74 68 86 99"
// Когда два числа имеют одинаковый «вес», давайте классифицируем их так, как если бы они были строками (в алфавитном порядке), а не числами:
// 180находится раньше 90, так как, имея тот же «вес» (9), он стоит перед строкой .
// Все числа в списке положительные, и список может быть пустым.
// Заметки
// может случиться так, что во входной строке есть начальные, конечные пробелы и более чем уникальный пробел между двумя последовательными числами.
// Для C: результат освобождается.

function orderWeight(strng) {
  const sum = (str) => str.split("").reduce((ac, el) => ac + +el, 0);
  function compare(a, b) {
    let sumA = sum(a);
    let sumB = sum(b);
    return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
  }
  return strng.split(" ").sort(compare).join(" ");
}

// console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));

// 11
// Завершите решение так,
// чтобы оно разбило строку на пары из двух символов. Если строка содержит
// нечетное количество символов, то отсутствующий второй символ последней пары должен быть заменен
// символом подчеркивания ('_').

function solution11(str) {
  const result = [];
  for (let i = 0; i < str.length; i = i + 2) {
    if (str[i + 1]) {
      result.push(str[i] + str[i + 1]);
    } else {
      result.push(str[i] + "_");
    }
  }
  return result;
}

// console.log(solution11("adc"));

// 12
// Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает
// ту же строку, но с перевернутыми всеми словами из пяти или более букв (точно так же, как имя этого Ката).
// Передаваемые строки будут состоять только из букв и пробелов. Пробелы будут включены только в том случае,
// если присутствует более одного слова.

function spinWords(string) {
  string = string.split(" ");
  const result = [];
  for (let i = 0; i < string.length; i++) {
    let strLen = string[i].length;
    if (strLen >= 5) {
      result.push(string[i].split("").reverse().join(""));
    } else {
      result.push(string[i]);
    }
  }
  return result.join(" ");
}

// console.log(spinWords("This is another test"));

//13
// Маркетинговая команда тратит слишком много времени на ввод хэштегов.
// Давайте поможем им с нашим генератором хэштегов!

// Вот сделка:

// Он должен начинаться с хэштега ( #).
// Во всех словах первая буква должна быть заглавной.
// Если окончательный результат длиннее 140 символов, он должен вернуть false.
// Если ввод или результат представляет собой пустую строку, она должна возвращаться false.
function generateHashtag(str) {
  const result = [];
  str = str.toLowerCase();
  if (str.trim() === "") {
    return false;
  } else {
    const hash = str.replace(/\s+/g, " ").trim().split(" ");
    hash.forEach((element) => {
      let strElem = element[0].toUpperCase() + `${element.slice(1)}`;
      result.push(strElem);
    });
    let strResult = `#${result.join("")}`;
    if (strResult.length > 140) {
      return false;
    } else {
      return strResult;
    }
  }
}

// console.log(generateHashtag("    Hello     World   "));

//14

// Пит любит печь торты. У него есть рецепты и ингредиенты. К сожалению, он не силен в математике.
// Поможешь ему узнать, сколько тортов он сможет испечь, учитывая его рецепты?

// Напишите функцию cakes(), которая принимает рецепт (объект) и доступные ингредиенты (тоже объект)
// и возвращает максимальное количество пирожных, которые Пит может испечь (целое число).
// Для простоты нет единиц измерения количества (например, 1 фунт муки или 200 г сахара — это просто 1 или 200).
// Ингредиенты, отсутствующие в объектах, можно считать равными 0.

function cakes(recipe, available) {
  let currCount;

  for (const key in recipe) {
    if (available[key]) {
      let equalsReceptAvalable = Math.floor(available[key] / recipe[key] || 0);
      if (!currCount || equalsReceptAvalable < currCount) {
        currCount = equalsReceptAvalable;
      }
    } else {
      return 0;
    }
  }
  return currCount;
}

// console.log(
//   cakes(
//     { flour: 500, sugar: 200, eggs: 1, apple: 0 },
//     { flour: 0, sugar: 0, eggs: 0 }
//   )
// );

//15

// Учитывая список целых чисел и одно значение суммы,
// верните первые два значения (анализируйте слева)
// в порядке появления, которые в сумме образуют сумму.

// Если имеется две или более пар с требуемой суммой,
//  то решением является пара, второй элемент которой имеет наименьший индекс.

let sum_pairs = function (ints, s) {
  let seen = {};
  for (let i = 0; i < ints.length; ++i) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    console.log(seen[ints[i]]);
    seen[ints[i]] = true;
    console.log(seen);
  }
};

// console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10));

//16

// Напишите функцию , persistence которая принимает положительный параметр num
// и возвращает его мультипликативную постоянство, то есть количество раз,
// которое вы должны умножить на цифры, numпока не получите одну цифру.

function persistence(num, count = 0) {
  let stringNum = num.toString();
  let numLenght = stringNum.length;
  if (numLenght == 1) {
    return count;
  } else {
    count += 1;
    num = stringNum.split("").reduce((accum, curr) => accum * curr, 1);
    return persistence(num, count);
  }
}

// console.log(persistence(999));

//17

// Возьмите 2 строки s1и s2включите только буквы от aдо z.
//  Возвращает новую отсортированную строку, максимально длинную, содержащую различные буквы
//  (каждая из которых взята только один раз) из s1 или s2.

function longest(s1, s2) {
  const arrStringSort = (s1 + s2).split("").sort();
  const makeRes = (arr) => [...new Set(arr)];
  const res = makeRes(arrStringSort);
  return res.join("");
}

// let a = "xyaabbbccccdefww";
// let b = "xxxxyyyyabklmopq";

// console.log(longest(a, b));

// 18

// Вам дадут слово. Ваша задача — вернуть средний символ слова.
// Если длина слова нечетная, вернуть средний символ.
// Если длина слова четная, верните средние 2 символа.

function getMiddle(s) {
  if (s.length % 2 != 0) {
    return s.slice(s.length / 2, s.length / 2 + 1);
  } else {
    return s.slice(Math.floor(s.length / 2) - 1, Math.ceil(s.length / 2) + 1);
  }
}

//console.log(getMiddle("testing"));

//*19

/*
! пока нет 
Боб пошел в начальную школу и сейчас учится умножать неотрицательные числа. 
Поскольку он только начал учиться, он еще не знает, что такое керри. Чтобы умножить два числа, 
он последовательно перебирает их цифры справа налево, умножает соответствующие цифры в двух числах и записывает последнюю цифру результата. 
Если в одном числе меньше цифр, чем в другом, он добавляет к нему ведущие нули.
Например, 15 x 43 = 45 для Боба, потому что 5 x 3 = 15 и Бод записывает 5, и 1 x 4 = 4 поэтому Боб пишет 4.
2016 x 100 = 0, потому что 100 имеет только 3 цифры и должен быть записан как 0100.
Аналогично, 382 x 31 = 42.
Учитель Боба дал ему список попарно различных неотрицательных numbersне более 1000 и попросил найти the maximal number of integers, что можно выбрать такое, что the product of each pair of the chosen integers is equal to 0.
Помогите Бобу решить задачу, но помните to calculate products the same way Bob does, 
чтобы учитель не заподозрил, что Боб жульничает.
Ввод, вывод
[input]целочисленный массив numbers

Массив попарно различных чисел.

1 ≤ numbers.length ≤ 20

0 ≤ numbers[i] ≤ 1000

[output]целое число

Максимальное количество целых чисел для выбора.

Пример
Для numbers = [100, 25, 17, 52], вывод должен быть 3.
Каждая пара чисел из группы [100, 25, 52]имеет произведение 0 при вычислении по методу Боба.
100 x 25 = 0, 100 x 52 = 0, 25 x 52 = 0
Таким образом, на выходе получается размер группы [100, 25, 52].
Для numbers = [0, 45, 502, 1000], вывод должен быть 4.

Произведение всех пар чисел в [0, 45, 502, 1000] равно 0.
0 x 45 = 0, 0 x 502 = 0, 0 x 1000 = 0,
45 x 502 = 0, 45 x 1000 = 0, 502 x 1000 = 0
Итак, выход есть 4.*/

let numbers = [0, 45, 502, 1000];

function multiplyNumbers(numbers) {
  let maxLengthNumber = 1;
  let count = 0;
  for (let i = 0; i < numbers.length; i = i + 2) {
    let currentNumberFirst = numbers[i];
    let currentNumberSecond = numbers[i + 1];
    console.log(currentNumberFirst);
    console.log(currentNumberSecond);
  }
}

//multiplyNumbers(numbers);

// *20

/* Напишите функцию с именем first_non_repeating_letter, которая принимает на вход строку и возвращает первый символ, 
который нигде в строке не повторяется.

Например, если на вход введено «стресс», функция должна вернуть «t», так как буква t встречается в строке только один раз 
и встречается в строке первой.
В качестве дополнительной проблемы прописные и строчные буквы считаются одним 
и тем же символом, но функция должна возвращать правильный регистр для начальной буквы. Например, ввод «sTreSS» должен возвращать «T».
Если строка содержит все повторяющиеся символы, она должна возвращать пустую строку ("") или None — см. примеры тестов. */

function firstNonRepeatingLetter(s) {
  let str = s.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === s.lastIndexOf(str[i])) return s[i];
  }
  return "";
}

//console.log(firstNonRepeatingLetter("moonmen"));
