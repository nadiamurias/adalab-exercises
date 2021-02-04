"use strict";

const inputElement = document.querySelector(".js-input");
const paragraphElement = document.querySelector(".js-paragraph");

function handleAddText(event) {
  paragraphElement.innerHTML = event.currentTarget.value;
}

inputElement.addEventListener("keyup", handleAddText);
