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
