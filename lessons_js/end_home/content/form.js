export const form = document.createElement("form");
form.className = "form";
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.fontSize = "32px";

const label = document.createElement("label");
label.className = "label";
label.textContent = "Введите задачу";

const input = document.createElement("input");
input.className = "input";
input.style.width = "100%";
input.style.boxSizing = "border-box";
input.style.padding = "12px 20px";

const button_input = document.createElement("button");
button_input.className = "btn_input";
button_input.textContent = "Добавить";

form.prepend(label);
form.append(input);
form.append(button_input);
