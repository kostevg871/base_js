//home work

const compareArray = (arr1, arr2) => {
  const str1 = arr1.toString();
  const str2 = arr2.toString();
  if (str1.length != str2.length) {
    return false;
  }
  return str1 === str2;
};

console.log(["Alex", "Ivan", "Tony"].toString()), typeof [1, 2, 3], toString();
console.log(compareArray([1, 2, 3], [1, 2, 3]));

// to home
const multiArr = [1, 2, [3, 4, 5, [6, 7, 8]], 9, 10, [11, 12, [13, 14, [15]]]];
// first Try
const firstTry = (arr) =>
  arr
    .toString()
    .split(",")
    .map((el) => +el);
//second Try
const secondTry = (arr) => arr.flat(Infinity);
console.log(secondTry(multiArr));
//third Try
const thirdTry = (arr) => {
  let haveArr = false;
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      haveArr = true;
    }
  }
  if (haveArr) {
    return thirdTry(arr.flat());
  }
  return arr;
};

console.log(thirdTry(multiArr));