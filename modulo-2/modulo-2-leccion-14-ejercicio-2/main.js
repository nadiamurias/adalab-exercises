"use strict";

let counter = 0;
let temp;

const incrementAndShowCounter = () => {
  counter += 1;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
  if (counter === 12){
    clearInterval(temp)

  }
};

temp = setInterval(incrementAndShowCounter, 1000);