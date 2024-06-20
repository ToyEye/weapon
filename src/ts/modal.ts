import { IClass } from "../types/types";

export function modalMarkUp(weapon: IClass) {
  const modalRef = document.querySelector(".modal_backdrop");
  modalRef?.classList.remove("is-hidden");

  const markup = `
    <div class="modal">
    
        <h2>${weapon.name}</h2>
        <img src="${weapon.img}" width="200px"/>
        <p>${weapon.description}  ${weapon.full_description}</p>

        <div class="modal_characteristic">
            <p>${weapon.atack}</p>
            <p>${weapon.block}</p>
            <p>${weapon.critical_chance}</p>
        </div>

        <button type="button" id="modal_close" class="modal_close"><p>Close</p></button>
    </div>
    
    `;

  function onModalClose() {
    modalRef?.classList.add("is-hidden");
    window.removeEventListener("keydown", onModalClose);
    modalRef?.removeEventListener("click", onModalClose);
    if (modalRef) modalRef.innerHTML = "";
  }

  if (modalRef) {
    modalRef.innerHTML = markup;

    const modalBtn = document.querySelector("#modal_close");

    modalBtn?.addEventListener("click", onModalClose);
    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        onModalClose();
      }
    });
    modalRef.addEventListener("click", (event) => {
      if (event.target === event.currentTarget) {
        onModalClose();
      }
    });
  }
}
