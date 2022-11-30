// const addBtn = document.getElementById("add_button");

// console.log(addBtn);

// const buttonsCol = document.getElementsByTagName("button");
// console.log(buttonsCol);
// console.log(buttonsCol[0]);

// const listItem = document.querySelector("li + .active");
// console.log(listItem);

// const listItems = document.querySelectorAll(".list_items");
// console.log(listItems);

// const header = document.querySelector("header");
// header.innerHTML = "<h3>NEW TITLE</h3>";
// console.log(header);

// const footer = document.querySelector("footer");
// header.innerHTML = "<h3>NEW TITLE</h3>";
// footer.outerHTML = "<div><p>Hello footer</p></div>";

// const add_button = document.getElementById("add_button");

// add_button.style.color = "red";
// add_button.style.width = "400px";

// const list = document.querySelector("ul");

// list.classList.toggle("active");

// console.log(list.className);

// const newListItem = document.createElement("li");

// newListItem.className = "list_item";

// newListItem.textContent = "New Element";

// const list2 = document.querySelector("ul");

// list2.append(newListItem);

// const themeBtn = document.getElementById("theme_button");

const first = function () {
  console.log("Hello word");
};
const second = function () {
  console.log("Bye word");
};

// themeBtn.onclick = function(){
//     first();
//     second();
// }

// themeBtn.addEventListener("click", first);
// themeBtn.addEventListener("click", second);
// themeBtn.removeEventListener("click", second);

const themeBtn = document.getElementById("theme_button");
const themeToggle = function () {
  const body = document.body;
  body.classList.toggle("light_theme");
  if (body.classList.contains("light_theme")) {
    this.textContent = "Темная тема";
  } else {
    this.textContent = "Светлая тема";
  }
};

// themeBtn.addEventListener("click", themeToggle);

const content = document.querySelector(".content");
content.addEventListener("click", (event) => console.log(event.target, event.currentTarget));

const list = document.querySelector(".list");
list.addEventListener("click", () => console.log("list"));

const listItem = document.querySelectorAll(".list_item");

for (let item of listItem) {
  item.addEventListener("click", (event) => event.stopPropagation());
}
