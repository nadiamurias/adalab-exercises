"use strict";

const body = document.querySelector("body");

function handleChangeColor(event) {
  if (event.keyCode === 82) {
    body.classList.add("firstColor");
    body.classList.remove("secondColor");
    console.log("clico r");
  } else if (event.keyCode === 77) {
    body.classList.add("secondColor");
    body.classList.remove("firstColor");
  }
}

document.addEventListener("keydown", handleChangeColor);
