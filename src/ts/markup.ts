import { IClass } from "types/types";
import warriorList from "../data/warrior.json";
import wizardList from "../data/wizard.json";
import { modalMarkUp } from "./modal";

export function createMarkup() {
  const markup = `
          <section class="section">
                  <div class="container">
                  <h1 class="primary_title">Choose your hero</h1>
                    <ul class="person_list">
                      <li>
                        <img
                          src="/img/warrior.jpg"
                          alt="warrior"
                          width="160px"
                          id="warrior"
                        />

                      </li>
                      <li>
                        <img
                          src="/img/mage.jpg"
                          alt="wizard"
                          width="160px"
                          id="wizard"
                        />
                      </li>
                    </ul>

                    <p class='character'></p>

                    <div class="weapon_container">
                      <ul class="weaponList"></ul>
                    </div>
                  </div>
          </section>`;

  return markup;
}

export function createWeaponMarkup(subClass: string) {
  let list = document.getElementsByClassName("weaponList")[0];
  list?.classList.remove("hidden-list");

  if (list) {
    list.innerHTML = "";
  }

  function markUpWithClass(characterList: IClass[]) {
    characterList.forEach((weapon) => {
      const item = document.createElement("li");
      const nameText = document.createElement("p");
      const nameDescription = document.createElement("p");
      const image = document.createElement("img");
      const button = document.createElement("button");

      image.src = weapon.img;
      image.alt = weapon.name;
      image.width = 160;
      nameText.textContent = weapon.name;
      nameDescription.textContent = weapon.description;
      button.textContent = "Details";
      button.type = "button";
      button.classList.add("button", "details");
      button.dataset.id = weapon.id;

      button.addEventListener("click", () => {
        modalMarkUp(weapon);
      });

      item.appendChild(image);
      item.appendChild(nameText);
      item.appendChild(nameDescription);
      item.appendChild(button);

      list?.append(item);
    });
  }
  if (subClass === "warrior") {
    markUpWithClass(warriorList);
  }

  if (subClass === "wizard") {
    markUpWithClass(wizardList);
  }

  return list;
}
