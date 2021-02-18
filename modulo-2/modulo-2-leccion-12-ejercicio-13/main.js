"use strict";
const arrayData = [
  { name: 'Nadia', surname: 'Murias', phone: 123456789 },
  { name: 'Sara', surname: 'Martínez', phone: 656952805 },
  { name: 'Maricarmen', surname: 'López', phone: 987654321 },
];
const selectionElement = document.querySelector('.auto');
const surnameElement = document.querySelector('.item2');
const phoneElement = document.querySelector('.item3');
function handleSelect(event) {
  console.log(event.currentTarget.value)
  for (let i = 0; i < arrayData.length; i++) {
    if (event.currentTarget.value === arrayData[i].name) {
        surnameElement.value = arrayData[i].surname;
        phoneElement.value = arrayData[i].phone;
      }
  }
}
selectionElement.addEventListener('change', handleSelect);