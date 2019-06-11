'use strict';
/*Создайте функцию, возвращающую слово «ворона» в правильной форме
 в зависимости от переданого числа n. Например: На ветке сидит 1 ворона;
 На ветке сидит 4 вороны; На ветке сидит 26 ворон.*/

function getRavensNames(quantity) {
    if (quantity == 1 || quantity == 21) {
        console.log(`На ветке сидит ${quantity} ворона`);
    }
    else if (quantity == 2 || quantity == 3 || quantity == 4 || quantity == 22 || quantity == 23 || quantity == 24) {
        console.log(`На ветке сидит ${quantity} вороны`);
    }
    else if (quantity == 0) {
        console.log("На ветке нет ворон");
    }
    else {
        console.log(`На ветке сидит ${quantity} ворон`);
    }
}

// Tests
getRavensNames(0);  // На ветке нет ворон
getRavensNames(1);  // На ветке сидит 1 ворона
getRavensNames(21);  // На ветке сидит 21 ворона
getRavensNames(2);  // На ветке сидит 2 вороны
getRavensNames(24);  // На ветке сидит 24 вороны
getRavensNames(7);  // На ветке сидит 7 ворон
getRavensNames(25);  // На ветке сидит 25 ворон