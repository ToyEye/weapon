import { createMarkup } from "./ts/markup";
import { onSubClassClick } from "./ts/subclass";

import "./style/style.css";

const root = document.querySelector("#app");

function main() {
  if (root) {
    root.innerHTML = createMarkup();

    onSubClassClick();
  }
}

main();
