import { form } from "./form.js";

export const container = document.createElement("section");
container.className = "container";
container.style.fontSize = "32px";
container.style.display = "flex";
container.style.width = "1140px";
container.style.flexDirection = "column";
container.style.margin = "10px"

const content = document.createElement("div");
content.className = "container_content";

const list = document.createElement("ul");
list.className = "container_content_list_ul";
list.style.paddingTop = "15px";
list.style.listStyleType = "none"

const list_item = document.createElement("li");
list_item.className = "list_item";
list_item.textContent = "Добавьте задачу";

container.append(content);
content.prepend(list);
list.prepend(list_item);
container.append(form);

