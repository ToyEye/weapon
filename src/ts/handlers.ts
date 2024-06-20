import { createWeaponMarkup } from "./markup";

export function btnHandlerClick(event: Event) {
  const target = event.target as HTMLElement;
  const weaponContainer = document.querySelector(".weapon_container");

  let list = document.querySelector(".weaponList");

  list?.classList.add("hidden-list");

  const subClass = target.innerText.split(" ")[2];

  if (weaponContainer) weaponContainer.append(createWeaponMarkup(subClass));
}
