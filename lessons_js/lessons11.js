// Асинхронность в js

// function greet() {
//   console.log("Hello!");
// }

// console.log("start");
// setTimeout(() => {
//   console.log("3 sec");
// }, 3000);

// setTimeout(() => {
//   console.log("2 sec");
// }, 2000);

// setTimeout(() => {
//   console.log("0 sec");
// }, 0);

// console.log("end");

const request = () => {
  console.log("init request");
  setTimeout(() => {
    console.log("create response");

    const response = {
      name: "Jeka",
      age: 30,
    };

    setTimeout(() => {
      response.modified = true;
      console.log(response);
    }, 2000);
  }, 2000);
};

request();

const requestOne = () => {
  console.log("init request!");
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("create response");

      const response = {
        name: "Jeka",
        age: 30,
      };

      resolve(response);
    }, 2000);
  });
};

const requestTWo = (result) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      result.modified = true;
      //   reject("CUSTOM ERROR")
      //   throw "CUSTOM ERROR";
      resolve(result);
    }, 2000);
  });
};

requestOne()
  .then((result) => requestTWo(result))
  .then((response) => console.log(response))
//   .catch((err) => console.log(err.message))
//   .finally(() => console.log("finally"));

const requestFunction = async () => {
  const result = await requestOne();
//   console.log(result);
  const response = await requestTWo(result);
  console.log(response);
};

requestFunction();
