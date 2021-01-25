
'use strict';

const paragraph = document.querySelector('.js-paragraph');

// formas de crear el function:
// opcion 1:
const handleAddParragraph = () => {   
    // opcion:2 function handleAddParragraph () {}
    // opcion 3: const handleAddParragraph = function () {}
    const result = paragraph.innerHTML;
    paragraph.innerHTML = result + result;
    console.log(paragraph.innerHTML)
};

paragraph.addEventListener('mouseover', handleAddParragraph);