import { btnHandlerClick } from "./handlers";

export function onSubClassClick() {
  const refs = {
    classList: document.querySelector(".person_list"),
    character: document.querySelector(".character"),
  };

  refs.classList?.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    if (target.nodeName === "IMG" && refs.character) {
      refs.character.textContent = `${target.id}`;

      let btn = document.querySelector(".button");

      if (!btn) {
        refs.character.insertAdjacentHTML(
          "afterend",
          `<button class="button type">
            <span class="btn-txt">Weapon for ${target.id}</span>
          </button>
        `
        );

        btn = document.querySelector(".button");
        btn?.addEventListener("click", btnHandlerClick);
      } else {
        if (btn.firstElementChild) {
          btn.firstElementChild.textContent = `Weapon for ${target.id}`;
          btn.removeEventListener("click", btnHandlerClick);
          btn.addEventListener("click", btnHandlerClick);
        }
      }
    }
  });
}
