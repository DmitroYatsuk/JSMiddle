'use strict'
/* 1. Из данного массива удалить значение «technics». 
Все остальное превратить в строку формата «foods, fruits…» преобразование в строку выполнить с помощью одного метода.
 */
let goods = ['foods', 'fruits', 'technics', 'phones', 'computers'];
let deletedGoods = goods.splice(2, 1);
let strGoods = goods.join(", ");

console.log(strGoods);

/* 2. Преобразовать текущую дату и время в понятный человеку формат: 08:05 01/01/2018. Используя шаблонные строки.
 */

function currentDate() {
    let curDate = new Date();
    return `${lessThanTen(curDate.getHours())}:${lessThanTen(curDate.getMinutes())} ${lessThanTen(curDate.getDate())}/${lessThanTen(curDate.getMonth() + 1)}/${curDate.getFullYear()}`
}

function lessThanTen(num) {
    return num < 10 ? "0" + num : num;
}


console.log(currentDate());

/* 3. Напишите функцию, которая возвращает расширение файла. Например, getExt(«/home/user/project/script.js») вернет “js”. 
Функция должна принимать строку
 */
function getExt(path) {
    return path.substr(path.indexOf(".") + 1);
}

console.log(getExt('/home/user/project/script.js'));

/* 4. Напишите функцию, которая удаляет дубликаты из массива. 
Например, входной массив: [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6], массив который возвращает функция [1, 2, 4, 5, 7, 8, 3, 6] */

let arrIn = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

let arrOut = arrIn.filter((item, idx) => { return arrIn.indexOf(item) === idx })

console.log(arrOut);