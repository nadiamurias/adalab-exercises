'use strict';

let people = [];

fetch ('https://swapi.dev/api/people/')
.then (function (response) {
    return response.json();
})
.then (function (peopleJson) { 
   people = peopleJson;
   console.log(people);
   renderList();
   
})

function renderList(){
    
}