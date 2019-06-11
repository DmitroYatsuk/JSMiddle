'use strict';

/* 3. Напишите функцию, определяющую, является ли данный год високосным по григорианскому календарю. 
Функция должна принимать число и выводить true если год является високосным и false если не високосным. 
Функция должна содержать проверку полученного аргумента на число, если полученный аргумент не число, 
выполнять преобразование к числу, иначе выводить сообщение об ошибке. */

function isLeapYear(year) {
    if (year % 400 == 0) {
        return true;
    }
    else if (year % 100 == 0) {
        return false;
    }
    else if (year % 4 == 0) {
        return true;
    }
    else {
        return "Error - year is not found"
    }
}

// Tests
console.log(isLeapYear(1600));  //true
console.log(isLeapYear(2100));  //false
console.log(isLeapYear(2012)); //true
console.log(isLeapYear());    //Error - year is not found
console.log(isLeapYear(1700)); //false
console.log(isLeapYear(1600)); //true
console.log(isLeapYear(2016)); //true