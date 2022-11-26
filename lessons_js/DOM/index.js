const addBtn = document.getElementById("add_button");

console.log(addBtn);

const buttonsCol = document.getElementsByTagName("button");
console.log(buttonsCol);
console.log(buttonsCol[0]);

const listItem = document.querySelector("li + .active");
console.log(listItem);

const listItems = document.querySelectorAll(".list_items");
console.log(listItems);

const header = document.querySelector("header");
header.innerHTML = "<h3>NEW TITLE</h3>";
console.log(header);

const footer = document.querySelector("footer");
header.innerHTML = "<h3>NEW TITLE</h3>";
footer.outerHTML = "<div><p>Hello footer</p></div>";