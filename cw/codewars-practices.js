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
    console.log(1);
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
