export let header = document.createElement("header");
header.className = "header";

const header_text = document.createElement("h1");
header_text.className = "header_h1";
header_text.textContent = "Список дел";

header.prepend(header_text);
