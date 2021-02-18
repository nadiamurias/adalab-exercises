'use strict';

const buttonElement = document.querySelector('.js-search');
const nameElement = document.querySelector('.js-name');
const imageElement = document.querySelector('.js-photo');
const reposElement =document.querySelector('.js-repos');
const userElement = document.querySelector('.js-input');


function handleResult(e){
e.preventDefault();
 const username = userElement.value;
 console.log(username);
fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then(data => {
    nameElement.innerHTML = data.login;
    imageElement.src = data.avatar_url;
    reposElement.innerHTML = data.public_repos;
  });
}

 buttonElement.addEventListener('click', handleResult);