// 1 easy
/*  Write code that enhances all arrays such that you can call the array.last() method 
on any array and it will return the last element. If there are no elements in the array, it should return -1.
You may assume the array is the output of JSON.parse. */

Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  }
  const arrayLength = this.length - 1;
  return this[arrayLength];
};
//console.log([null, {}, 3].last());
//console.log([].last());

//2 Counter easy
/* Given an integer n, return a counter function. 
This counter function initially returns n and then returns 1 more 
than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).*/

var createCounter = function (n) {
  return (counter = function () {
    return n++;
  });
};

//console.log(createCounter(10));
//console.log(counter());
//console.log(counter());
//console.log(counter());

//3  Sleep Easy
/* Given a positive integer millis, write an asynchronous 
function that sleeps for millis milliseconds. It can resolve any value.*/

//async function sleep(millis) {
//  return new Promise((resolve, reject) => {
//    setTimeout(() => {
//      resolve(millis);
//    }, millis);
//  });
//}

// top solution
async function sleep(millis) {
  await new Promise((resolve) => setTimeout(resolve, millis));
}

//console.log(sleep(100));

//3
//3  Array reduce transformation Easy
/* Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), 
val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.
If the length of the array is 0, it should return init.
Please solve it without using the built-in Array.reduce method.*/

var reduce = function (nums, fn, init) {
  if (nums.length === 0) {
    return init;
  }
  let accum = init;
  for (let i = 0; i <= nums.length - 1; i++) {
    let curr = nums[i];
    accum = fn(accum, curr);
  }
  return accum;
};

//console.log(
//  reduce(
//    [1, 2, 3, 4],
//    function sum(accum, curr) {
//      return accum + curr;
//    },
//    0
//  )
//);

//4 Easy
/*Напишите функцию  expect, которая поможет разработчикам тестировать свой код. Он должен принимать любое значение  val
и возвращать объект с помощью следующих двух функций.

toBe(val) принимает другое значение и возвращает значение,  
true если эти два значения  === друг друга. Если они не равны, должна возникнуть ошибка  "Not Equal".
notToBe(val) принимает другое значение и возвращает значение,  true если эти два значения 
!== друг друга. Если они равны, должна возникнуть ошибка  "Equal".*/

var expect = function (val) {
  function toBe(valToBe) {
    if (val === valToBe) {
      return true;
    } else {
      throw new Error("Not Equal");
    }
  }

  function notToBe(valNotToBe) {
    if (val !== valNotToBe) {
      return true;
    } else {
      throw new Error("Equal");
    }
  }

  return { toBe, notToBe };
};

//console.log(expect(5).toBe(null));
//console.log(expect(5).notToBe(null));

//5 Easy
/*Спроектируйте Calculatorкласс. Класс должен обеспечивать математические операции сложения,
вычитания, умножения, деления и возведения в степень. Он также должен позволять выполнять последовательные операции
с использованием цепочки методов. Конструктор Calculatorкласса должен принимать число, которое служит начальным значением result.

Ваш Calculator класс должен иметь следующие методы:

add— Этот метод добавляет заданное число valueк  resultи возвращает обновленное значение Calculator.
subtract- Этот метод вычитает заданное число value из  resultи возвращает обновленное значение Calculator.
multiply— Этот метод умножает result  на заданное число valueи возвращает обновленное значение Calculator.
divide- Этот метод делит resultна заданное число valueи возвращает обновленное значение Calculator. 
Если переданное значение равно , должна быть выдана 0ошибка ."Division by zero is not allowed"
power- Этот метод возводит число  resultв степень заданного числа valueи возвращает обновленное значение Calculator.
getResult- Этот метод возвращает result.
Решения в пределах   фактического результата считаются правильными.10-5 */

class Calculator {
  constructor(value) {
    //this.value = value;
    this.result = value;
  }

  add(value) {
    this.result = this.result + value;
    // можно использовать this
    return this;
  }

  subtract(value) {
    this.result = this.result - value;
    return new Calculator(this.result);
  }

  multiply(value) {
    this.result = this.result * value;
    return new Calculator(this.result);
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    } else {
      this.result = this.result / value;
      return new Calculator(this.result);
    }
  }

  power(value) {
    this.result = this.result ** value;
    return new Calculator(this.result);
  }

  getResult() {
    return this.result;
  }
}

//console.log(new Calculator(20).divide(0).getResult());

//6 Easy
/*Учитывая функцию fn, массив аргументов  argsи интервал времени t, верните функцию отмены cancelFn.

Функцию fn следует вызывать args немедленно, 
а затем вызывать снова каждые  t миллисекунды, пока  cancelFn она не будет вызвана в cancelTimeMsмс. */

var cancellable = function (fn, args, t) {
  fn(...args);

  let timer = setInterval(() => fn(...args), t);

  let cancelFn = () => clearInterval(timer);
  return cancelFn;
};

//const result = [];

//const fn = (x) => x * 2;
//const args = [4],
//  t = 35,
//  cancelTimeMs = 190;

//const start = performance.now();

//const log = (...argsArr) => {
//  const diff = Math.floor(performance.now() - start);
//  result.push({ time: diff, returned: fn(...argsArr) });
//};

//const cancel = cancellable(log, args, t);

//setTimeout(cancel, cancelTimeMs);

//setTimeout(() => {
//  console.log(result);
//}, cancelTimeMs + t + 15);

//7 Easy

/*
Учитывая объект или массив, верните значение, если он пуст.

Пустой объект не содержит пар ключ-значение.
Пустой массив не содержит элементов.
Вы можете предположить, что объект или массив являются выходными данными  JSON.parse.
*/

var isEmpty = function (obj) {
  //  if (Object.keys(obj).length === 0) {
  //    return true;
  //  } else {
  //    return false;
  //  }

  for (const _ in obj) return true;
  return false;
};

//console.log(isEmpty([]));

//8 Easy
/*  Вам дана строка с индексом 0word , состоящая из строчных английских букв. 
Вам нужно выбрать один индекс и удалить букву в этом индексе word, чтобы частота появления каждой буквы wordбыла одинаковой.
Возвращает, если можно удалить одну букву, чтобы частота всех букв была одинаковой, и в противном случае . truewordfalse
Примечание:

Частота буквы — это количество раз, когда она встречается в строке .x
Вы должны удалить ровно одну букву и не можете ничего не делать. */

var equalFrequency = function (word) {
  let result = new Map();
  for (let i = 0; i <= word.length - 1; i++) {
    let wordkey = word[i];
    if (result.has(wordkey)) {
      result.set(wordkey, result.get(wordkey) + 1);
    } else {
      result.set(wordkey, 1);
    }
  }

  let output = false;
  result.forEach((value, key) => {
    const newMap = new Map(result);
    if (value === 1) {
      newMap.delete(key);
    } else {
      newMap.set(key, newMap.get(key) - 1);
    }
    if (new Set([...newMap.values()]).size === 1) output = true;
  });
  return output;
};

//console.log(equalFrequency("bac"));

//9 Easy

/*Напишите функцию  argumentsLength, 
которая возвращает количество переданных ей аргументов. */

var argumentsLength = function (...args) {
  return args.length;
};

//console.log(argumentsLength());

//10 Easy Добавьте два обещания
/* Учитывая два обещания promise1и promise2, верните новое
 обещание. promise1и promise2 оба будут разрешены с помощью числа. Возвращенное 
 обещание должно разрешиться как сумма двух чисел.
*/

var addTwoPromises = async function (promise1, promise2) {
  return Promise.all([promise1, promise2]).then(
    (values) => values[0] + values[1]
  );
};

//addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4

//11 Easy Отмена таймаута
/*
Учитывая функцию fn, массив аргументов  argsи тайм-аут  t в миллисекундах, верните функцию отмены cancelFn.

После задержки , будет вызвана cancelTimeMsвозвращенная функция отмены .cancelFn

setTimeout (cancelFn, cancelTimeMs)
Изначально выполнение функции fnдолжно задерживаться на tмиллисекунды.

tЕсли функция вызывается до задержки в миллисекундах cancelFn, она должна отменить отложенное выполнение fn. 
В противном случае, если cancelFnон не будет вызван в течение указанной задержки t, fnон должен быть выполнен с указанными argsаргументами.
*/

var cancellable = function (fn, args, t) {
  let timer = setTimeout(() => fn(...args), t);

  let cancelFn = () => clearTimeout(timer);
  return cancelFn;
};

//const result = [];

//const fn = (x) => x * 5;
//const args = [2],
//  t = 20,
//  cancelTimeMs = 50;

//const start = performance.now();

//const log = (...argsArr) => {
//  const diff = Math.floor(performance.now() - start);
//  result.push({ time: diff, returned: fn(...argsArr) });
//};

//const cancel = cancellable(log, args, t);

//const maxT = Math.max(t, cancelTimeMs);

//setTimeout(cancel, cancelTimeMs);

//setTimeout(() => {
//  console.log(result); // [{"time":20,"returned":10}]
//}, maxT + 15);

// 11 Easy Обертка массива

/*
Создайте класс  ArrayWrapper, который принимает в своем конструкторе массив целых чисел. Этот класс должен иметь две особенности:

Когда два экземпляра этого класса складываются вместе с  + оператором, результирующее значение представляет собой сумму 
всех элементов в обоих массивах.
Когда  String() функция вызывается в экземпляре, она возвращает строку, 
разделенную запятыми, заключенную в квадратные скобки. Например, [1,2,3].
*/

class ArrayWrapper {
  constructor(nums) {
    this.array = nums;
  }

  valueOf() {
    return this.array.reduce((arr, curr) => arr + curr, 0);
  }

  toString() {
    return `[${this.array.join(",")}]`;
  }
}

//const obj1 = new ArrayWrapper([[23, 98, 42, 70]]);
//const obj2 = new ArrayWrapper([3, 4]);

//console.log(obj1 + obj2); // 10
//console.log(String(obj1)); // "[1,2]"
//console.log(String(obj2)); // "[3,4]"

//12 Easy two sum

/*Учитывая массив целых чисел nums и целое число target, верните индексы двух чисел так, чтобы их сумма составляла target .

Вы можете предположить, что каждый вход будет иметь ровно одно решение , и вы не можете использовать один и тот же элемент дважды.

Вы можете вернуть ответ в любом порядке. */

var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = 0; j <= nums.length; j++) {
      let result;
      if (i === j) continue;
      result = nums[i] + nums[j];
      if (result === target) {
        return [i, j];
      }
      result = 0;
    }
  }
};

//var twoSum = function (nums, target) {
//  let map = new Map();

//  for (let i = 0; i < nums.length; i++) {
//    if (map.has(target - nums[i])) {
//      return [map.get(target - nums[i]), i];
//    } else {
//      map.set(nums[i], i);
//    }
//  }
//  return [];
//};

//var twoSum = function (nums, target) {
//  let hash = {};

//  for (let i = 0; i < nums.length; i++) {
//    const n = nums[i];
//    if (hash[target - n] !== undefined) {
//      return [hash[target - n], i];
//    }
//    hash[n] = i;
//  }
//  return [];
//};

//13 (2). Добавь два числа Medium

/*Вам даны два непустых связанных списка, представляющих два неотрицательных целых числа. 
Цифры хранятся в обратном порядке , и каждый из их узлов содержит одну цифру. Сложите два числа и верните сумму в виде связанного списка.
Вы можете предположить, что эти два числа не содержат ведущих нулей, кроме самого числа 0. */

var addTwoNumbers = function (l1, l2) {
  return add(l1, l2, 0);

  function add(l1, l2, carry) {
    const v1 = (l1 && l1.val) || 0;
    const v2 = (l2 && l2.val) || 0;
    const sum = v1 + v2 + carry;

    const newCarry = Math.floor(sum / 10);
    const val = sum % 10;
    return l1 || l2 || carry
      ? { val, next: add(l1 && l1.next, l2 && l2.next, newCarry) }
      : null;
  }
};

//console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));

// 14 (9) Число полиндром
/*
Учитывая целое число x, верните true if x
палиндром, и false иначе .
*/

var isPalindrome = function (x) {
  const xString = x.toString();
  const xArray = xString.split("");
  if (x < 0) {
    return false;
  }

  if (xArray.reverse().join("") === xString) {
    return true;
  }

  return false;
};

//console.log(isPalindrome(10));

//15 (13) От римского к целому числу
/*
Дана римская цифра, преобразуйте ее в целое число.
*/

var romanToInt = function (s) {
  const mapRoman = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let curr = mapRoman.get(`${s[i]}`);

    if (curr < mapRoman.get(`${s[i + 1]}`)) {
      result = result - curr;
    } else {
      result = result + curr;
    }
  }
  return result;
};

//console.log(romanToInt("LVIII"));

// 16 (12) Medium
/*
Учитывая целое число, преобразуйте его в римскую цифру.
*/

var intToRoman = function (num) {
  let digit = "";
  let r = "";
  let convert = (digit, tens, fives, ones) => {
    if (digit === 9) {
      r = r.concat(ones + tens);
    } else if (digit > 5) {
      r = r.concat(fives + ones.repeat(digit % 5));
    } else if (digit === 5) {
      r = r.concat(fives);
    } else if (digit === 4) {
      r = r.concat(ones + fives);
    } else if (digit > 0) {
      r = r.concat(ones.repeat(digit));
    }
  };

  if (num > 999) {
    convert(Math.floor(num / 1000), "", "", "M");
    num = Math.floor(num % 1000);
  }
  if (num > 99) {
    convert(Math.floor(num / 100), "M", "D", "C");
    num = Math.floor(num % 100);
  }
  if (num > 9) {
    convert(Math.floor(num / 10), "C", "L", "X");
    num = Math.floor(num % 10);
  }
  convert(num, "X", "V", "I");
  return r;
};

//console.log(intToRoman("449"));

// 17 (14) Easy Longest Common Prefix

/*
Напишите функцию для поиска самой длинной строки общего префикса среди массива строк.

Если общего префикса нет, верните пустую строку "".
*/

var longestCommonPrefix = function (strs) {
  let result = "";
  if (!strs.length) return "";
  let minStr = Math.min(...strs.map((str) => str.length));
  for (let i = 0; i < minStr; i++) {
    let char = strs[0][i];
    if (strs.every((str) => str[i] === char)) {
      result += char;
    } else {
      break;
    }
  }
  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
