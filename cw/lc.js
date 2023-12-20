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
