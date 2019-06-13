'use strict';
/*Создайте функцию, возвращающую слово «ворона» в правильной форме
 в зависимости от переданого числа n. Например: На ветке сидит 1 ворона;
 На ветке сидит 4 вороны; На ветке сидит 26 ворон.*/

function getRavensNames(n) {
    let plural = (n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
    if (plural === 0) {
        console.log(`На ветке сидит ${n} ворона`);
    }
    else if (plural === 1) {
        console.log(`На ветке сидит ${n} вороны`);
    }
    else if (plural === 2) {
        console.log(`На ветке сидит ${n} ворон`);
    }
}

// Tests
getRavensNames(0);  // На ветке сидит 0 ворон
getRavensNames(1);  // На ветке сидит 1 ворона
getRavensNames(21);  // На ветке сидит 21 ворона
getRavensNames(2);  // На ветке сидит 2 вороны
getRavensNames(24);  // На ветке сидит 24 вороны
getRavensNames(7);  // На ветке сидит 7 ворон
getRavensNames(1700);  // На ветке сидит 25 ворон