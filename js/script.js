'use strict';
let menuItem = document.getElementsByClassName('menu-item'),
 menu = document.querySelector('.menu'),
 lastItem = document.createElement('li'),
 title = document.getElementById('title');

lastItem.setAttribute('class', 'menu-item');
lastItem.textContent = ("Пятый пункт");
title.textContent = ("Мы продаем только подлинную технику Apple");



menu.insertBefore(menuItem[2], menuItem[1]);
menu.appendChild(lastItem);

document.body.style.background = "url('../img/apple_true.jpg') center no-repeat";

document.querySelectorAll('.adv').forEach(function (a) {
 a.remove();
});

let question, answer;

function feedback() {
 question = prompt("Ваше отношение к технике Apple?", ""),
  answer = document.getElementById('prompt');
 answer.textContent = question;
};

feedback();