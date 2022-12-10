export const header = document.createElement("header");
header.className = "header";
header.style.display = "flex"
header.style.height = "100px"
header.style.backgroundColor = "black"
header.style.width = "100%"
header.style.justifyContent = "center"



const header_text = document.createElement("h1");
header_text.className = "header_h1";
header_text.textContent = "Список дел";

header.prepend(header_text);
