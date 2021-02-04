"use strict";
const button = document.querySelector(".button");

function handleChangeClass() {
  button.classList.toggle("style-button");
}

button.addEventListener("click", handleChangeClass);
