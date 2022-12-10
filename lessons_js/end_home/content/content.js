export const container = document.createElement("section");
container.className = "container";
container.style.fontSize = "32px";
container.style.display = "flex";
container.style.width = "1140px";
container.style.backgroundColor = "bisque";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.flexDirection = "column";

const content = document.createElement("div");
content.className = "container_content";


const list = document.createElement("ul");
list.className = "container_content_list_ul";
list.style.paddingTop = "15px";

const list_item = document.createElement("li");
list_item.className = "list_item";
list_item.textContent = "Добавьте задачу";

const form = document.createElement("form");
form.className = "form";
form.style.display = "flex";
form.style.justifyContent = "center";
form.style.flexDirection = "column";
form.style.fontSize = "32px";

const label = document.createElement("label");
label.className = "label";
label.textContent = "Введите задачу";

const input = document.createElement("input");
input.className = "input";

const button_input = document.createElement("button");
button_input.className = "btn_input";
button_input.textContent = "Добавить";

container.append(content);
content.prepend(list);
list.prepend(list_item);
container.append(form);
form.prepend(label);
form.append(input);
form.append(button_input);
