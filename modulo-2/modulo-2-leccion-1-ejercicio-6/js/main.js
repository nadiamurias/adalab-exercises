"use strict";

const containerElement = document.querySelector(".js-container");

let html = "<h1>Lorem ipsum</h1>";
html += '<img src="http://via.placeholder.com/350x150" alt="">';
html += "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>";

containerElement.innerHTML = html;
