import { header } from "./header/index_header.js";
import { container as content } from "./content/content.js";
// import { footer } from "./footer/footer.js";

const wrapper = document.createElement("wrapper");
wrapper.className = "wrapper";
wrapper.style.display = "flex"
wrapper.style.flexDirection = "column"
wrapper.style.alignItems = "center"

document.body.prepend(wrapper);
wrapper.prepend(header);
wrapper.append(content);
// header.prepend(header_text);
// wrapper.append(footer);
