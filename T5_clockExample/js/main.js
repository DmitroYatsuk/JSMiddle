'use strict'
let hoursFirstNumber = document.querySelector(".hours .first .number"),
    hoursSecondNumber = document.querySelector(".hours .second .number"),
    minutesFirstNumber = document.querySelector(".minutes .first .number"),
    minutesSecondNumber = document.querySelector(".minutes .second .number"),
    secondsFirstNumber = document.querySelector(".seconds .first .number"),
    secondsSecondNumber = document.querySelector(".seconds .second .number"),
    tickSign = document.querySelector(".tick"),
    todayDate = document.querySelectorAll(".col-md-12", ".today-date"),
    container = document.querySelector(".container div:nth-child(3)");

function watch() {
    let curDate = new Date();

    let dayOfWeek,
        dayOfMonth = curDate.getDate(),
        monthOfYear;

    function getDayOfWeek() {
        switch (curDate.getDay()) {
            case 1:
                dayOfWeek = "понедельник";
                break;
            case 2:
                dayOfWeek = "вторник";
                break;
            case 3:
                dayOfWeek = "среда";
                break;
            case 4:
                dayOfWeek = "четверг";
                break;
            case 5:
                dayOfWeek = "пятница";
                break;
            case 6:
                dayOfWeek = "суббота";
                break;
            case 7:
                dayOfWeek = "воскресенье";
                break;
        }
    }

    function getMonthOfYear() {
        switch (curDate.getMonth()) {
            case 0:
                monthOfYear = "января";
                break;
            case 1:
                monthOfYear = "февраля";
                break;
            case 2:
                monthOfYear = "марта";
                break;
            case 3:
                monthOfYear = "апреля";
                break;
            case 4:
                monthOfYear = "мая";
                break;
            case 5:
                monthOfYear = "июня";
                break;
            case 6:
                monthOfYear = "июля";
                break;
            case 7:
                monthOfYear = "августа";
                break;
            case 8:
                monthOfYear = "сентября";
                break;
            case 9:
                monthOfYear = "октября";
                break;
            case 10:
                monthOfYear = "ноября";
                break;
            case 11:
                monthOfYear = "декабря";
                break;
        }
    }
    getDayOfWeek();
    getMonthOfYear();

    todayDate[0].textContent = `Сегодня ${dayOfWeek}, ${dayOfMonth} ${monthOfYear}.`;
    container.textContent = "test text"

    hoursFirstNumber.textContent = curDate.getHours().toString().slice(0, 1);
    hoursSecondNumber.textContent = curDate.getHours().toString().slice(1, 2);
    minutesFirstNumber.textContent = curDate.getMinutes().toString().slice(0, 1);
    minutesSecondNumber.textContent = curDate.getMinutes().toString().slice(1, 2);
    secondsFirstNumber.textContent = curDate.getSeconds().toString().slice(0, 1);
    secondsSecondNumber.textContent = curDate.getSeconds().toString().slice(1, 2);

    function lessThanTen(num) {
        return num < 10 ? "0" + num : num;
    }

}

let timerId = setInterval(watch(), 1000);