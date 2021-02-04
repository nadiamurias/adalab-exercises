"use strict";

let array = [];

function get100Numbers() {
  for (let i = 1; i < 100; i++) {
    array.push(i);
    console.log(array);
  }
  return array;
}

function getReversed100Numbers() {
  const reverseNumber = get100Numbers().reverse();
  console.log(reverseNumber);
}
getReversed100Numbers();
