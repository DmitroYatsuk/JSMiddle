/* 2. Напишите функцию, которая принимает строку и выполняет следующее преобразование:
если принимаемая строка больше или равна 15 символов, то остаток строки обрезается и вставляется символ … (троеточие). 
Для решения этой задачи используйте строковый метод String.substring(). */

function shrinkString(str) {
    if(str.length >= 15 ) {
        return str.substring(0, 15) + "...";
    }
    else {
        return str;
    }
}

// Tests
console.log(shrinkString("Hello, World!"));  // (13) Hello, World!
console.log(shrinkString("Hello, JSExpert!"));  //  (16) Hello, JSExpert...
console.log(shrinkString("Hello, JSExpert"));  //   (15)  Hello, JSExpert...