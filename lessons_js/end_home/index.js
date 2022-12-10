import { header } from "./header/index_header.js";
import { container as content } from "./content/content.js";
import { footer } from "./footer/footer.js";

const wrapper_body_footer = document.createElement("div");
wrapper_body_footer.className = "wrapper_body_footer";
wrapper_body_footer.style.display = "flex";
wrapper_body_footer.style.flexDirection = "column";
wrapper_body_footer.style.height = "100vh";
wrapper_body_footer.style.justifyContent = "center";

const wrapper_content = document.createElement("div");
wrapper_content.className = "wrapper_content";
wrapper_content.style.display = "flex";
wrapper_content.style.flex = 1;
wrapper_content.style.justifyContent = "center";
wrapper_content.style.alignItems = "start"


document.body.prepend(wrapper_body_footer);
document.body.prepend(header);
wrapper_body_footer.append(wrapper_content);
wrapper_body_footer.append(footer);
wrapper_content.append(content);
