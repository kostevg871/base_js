const a = { x: 1 };

console.log(a.__proto__ === Object.prototype);
console.log(a.prototype);

class B {}

const b = new B();
//console.log(b.prototype);

//console.log(a.hasOwnProperty("__proto__"));
//console.log(a.__proto__.hasOwnProperty("__proto__"));

//1 7 3 5 2 6 4

Promise.reject("a")
  .then(
    (p) => p + "1",
    (p) => p + "2"
  )
  .catch((p) => p + "b")
  .catch((p) => p + "c")
  .then((p) => p + "d1")
  .then("d2")
  .then((p) => p + "d3")
  .finally((p) => p + "e")
  .then((p) => console.log(p));
