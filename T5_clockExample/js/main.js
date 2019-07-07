'use strict';
    (function () {
        const hoursFirstNumber = document.querySelector(".hours .first .number"),
            hoursSecondNumber = document.querySelector(".hours .second .number"),
            minutesFirstNumber = document.querySelector(".minutes .first .number"),
            minutesSecondNumber = document.querySelector(".minutes .second .number"),
            secondsFirstNumber = document.querySelector(".seconds .first .number"),
            secondsSecondNumber = document.querySelector(".seconds .second .number"),
            tickSign = document.querySelector(".tick"),
            todayDate = document.querySelector(".col-md-12", ".today-date"),
            container = document.querySelector("body > div > div > div:nth-child(3) > div");

        function watch() {
            let curDate = new Date();

            let dayOfWeek,
                dayOfMonth = curDate.getDate(),
                monthOfYear;

            function getDayOfWeek() {
                switch (curDate.getDay()) {
                    case 0:
                        dayOfWeek = "воскресенье";
                        break;
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

            todayDate.textContent = `Сегодня ${dayOfWeek}, ${dayOfMonth} ${monthOfYear}.`;
            container.textContent = `До 2020 года осталось ${Math.floor((new Date('January 1, 2020 00:20:00') - curDate) / (3600000 * 24))} дней.`

            hoursFirstNumber.textContent = curDate.getHours().toString().slice(0, 1);
            hoursSecondNumber.textContent = curDate.getHours().toString().slice(1, 2);
            minutesFirstNumber.textContent = curDate.getMinutes().toString().slice(0, 1);
            minutesSecondNumber.textContent = curDate.getMinutes().toString().slice(1, 2);
            secondsFirstNumber.textContent = getFirstDigit(curDate.getSeconds());
            secondsSecondNumber.textContent = getSecondDigit(curDate.getSeconds());

            function getFirstDigit(num) {
                return num < 10 ? "0" : `${num}`.slice(0, 1);
            }

            function getSecondDigit(num) {
                return num < 10 ? `${num}`.slice(0, 1) : `${num}`.slice(1, 2);
            }

        }

        setInterval(watch, 1000);
    })();