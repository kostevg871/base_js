export const container = document.createElement("section");
container.className = "container";

const content = document.createElement("div");
content.className = "container_content";

const list = document.createElement("ul");
list.className = "container_content_list_ul";
list.style.paddingTop = "15px"

const list_item = document.createElement("li");
list_item.className = "list_item";
list_item.textContent = "Добавьте задачу"


container.prepend(content);
content.append(list);
list.append(list_item);
