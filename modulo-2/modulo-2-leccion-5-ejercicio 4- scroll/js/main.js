const containerElement = document.querySelector(".js-container");

function handlesScroll() {
  const scrollHeight = window.scrollY;
  if (scrollHeight < 400) {
    containerElement.classList.add("container-second");
    containerElement.classList.remove("container-first");
  } else {
    containerElement.classList.add("container-first");
    containerElement.classList.remove("container-second");
  }
}

window.addEventListener("scroll", handlesScroll);
