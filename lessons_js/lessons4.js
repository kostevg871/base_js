// console.log(null == undefined); // true
// console.log(null == 0); // false
// console.log("0" == false); //false
// console.log(undefined == false); // false

// if (true) {
//   console.log("true");
// }
// if ("2") {
//   console.log("false");
// }

// const name = "Petr";

// if (name === "Ivan") {
//   console.log(`Привет ${name}`);
// } else if (name === "Alex"){
//   console.log(`Привет друг ${name}`);
// }else if(name === "Petr"){
//     console.log(`Hi ${name}`);
// }else{
//     console.log('Привет незнакомец!');
// }

const val1 = 6;
const val2 = 4;
const val3 = 3;

if (val1 > val2) {
  let result = val1 > val3 ? val1 : val3;
  console.log(result);
} else {
  let result = val2 > val3 ? val2 : val3;
  console.log(result);
}

const roleUser = "User";

switch (roleUser) {
  case "Admin":
    console.log(roleUser);
    break;

  case "manager":
    console.log(roleUser);
    break;
  case "User":
    console.log(roleUser);
    break;

  default:
    console.log(`Not role ${roleUser}`);
    break;
}

const a = 100;
const b = 20;
const c = 3;

if (a < b && b < c) {
  console.log(c);
} else if (a > c) {
  console.log(a);
} else {
  console.log(b);
}

console.log((0 && true) || ("false" && null));
console.log(!0 && !!1);
console.log(!(null || (!"aпельсин" && true)));

const temp = -20;

if (temp <= -30) {
  console.log("Оставайтесь дома");
} else if (temp <= -10) {
  console.log("Сегодня холодно");
} else if (temp <= +5) {
  console.log("Не холодно");
} else if (temp <= 15) {
  console.log("Тепло");
} else if (temp <= 25) {
  console.log("Очень тепло");
} else if (temp < 35) {
  console.log("Жарко");
} else {
  console.log("Пекло!");
}

// let i = 0;
// while (i < 100) {
//   console.log(i);
//   i += 1;
// }

// const count = 5;
// const stringPrint = "Печать";

// for (let i = 0; i < count; i++) {
//   console.log(stringPrint);
// }

//homeWork
const M = 5;
let N = 50;
let day = 1;

while (true) {
  N = N / 2;
  console.log(N)
  if (N < M) {
    console.log(day);
    break;
  }
  day++
}

for (let i = 1; ; i++) {
  N = N / 2;
  if (N < M) {
    console.log(i);
    break;
  }
}

let iteration = 1;
let countLeapYear = 0;
const firstYear = 1800;
const lastYear = 2022;

for (let year = firstYear; year <= lastYear; year++) {
  if (year === 1961) {
    console.log(`Первый полет в космос ${year}`);
    console.log(
      `количество итерации  до нахождения года первого полета в космос ${iteration}`
    );
  }

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        countLeapYear++;
      }
    } else {
      countLeapYear++;
    }
  }

  if (year === 2022) {
    console.log(`Количество високосных годов ${countLeapYear}`);
    console.log(`Количество итераций високосных годов ${iteration}`);
  }

  iteration++;
}
