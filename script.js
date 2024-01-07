"use strict";

let btnshowModal = document.querySelectorAll(".show-modal");
let btnclosModal = document.querySelector(".close-modal");

let modal = document.querySelector(".modal");
let overLay = document.querySelector(".overlay");

for (let i = 0; i <= btnshowModal.length - 1; i++) {
  btnshowModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overLay.classList.remove("hidden");
  });
}

btnclosModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overLay.classList.remove("hidden");
});

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape") {
    console.log(e.key);
    if (!modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
    }
  }
});
