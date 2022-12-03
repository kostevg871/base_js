export const sayHello = () => {
  console.log("Hello form module script");
};

const user = {
  name: "keka",
  age: 26,
};

// export { sayHello as sayHello, user };

user.age = "232";
user.name = [];
console.log(user);
