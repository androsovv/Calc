'use strict';

//было интересно сделать как он будет в браузере работать, если так неверно, то переделаю

let  action = prompt('Введите название действия из перечисленного: sum, multi, sub, div', ''),
     first = +prompt('Введите первое число', ''),
     second = +prompt('Введите второе число', '');

function sum(a, b) {
   return (a + b);
}

function multi(a, b) {
   return (a * b);
}

function sub(a, b) {
   return (a - b);
}

function div(a, b) {
   return (a / b);
}

if (isNaN(first) || isNaN(second) || first == '' || second == '' || first == null || second == null) {
   alert('Eror');
}

switch (action) {
   case 'sum':
      alert(sum(first, second));
      break;
      
   case 'multi':
      alert(multi(first, second));
      break;

   case 'sub':
      alert(sub(first, second));
      break;
   
   case 'div':
      alert(div(first, second));
      break;
   
   default:
      alert("Unknown operation");
}

