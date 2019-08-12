'use strict';
let counter = 0,
arrToDisplay = [];

(function () {
    const addBtn = document.getElementById("add"),
        //removeBtn = document.getElementsByClassName('btn'),
        result = document.getElementById('result'),
        //filterSelector = document.getElementById("filter-selector"),
        count = document.getElementById("count");
        //removeBtnList = document.querySelectorAll('.btn[class*=danger]');

    // Shrink string
    function shrinkString(str) {
        return (str.length >= 15)
            ? str.substring(0, 15) + "..."
            : str;
    }

    function showResult(arr, cnt) {
        let resultHTML = "";
        for (let i = 0; i < arr.length; i++) {
            resultHTML += `<div class="col-md-3 col-sm-4 col-xs-6">\
            <img src="${arr[i].url}" alt="${arr[i].name}" class="img-thumbnail">\
            <div class="info-wrapper">\
            <div class="text-muted">${arr[i].name}</div>\
            <div class="text-muted top-padding">${arr[i].description}</div>\
            <div class="text-muted">${arr[i].date}</div>\
            <button class="btn btn-danger">Удалить</button>\
            </div>\
            </div>`;
        }
        result.innerHTML = resultHTML;
        count.innerHTML = cnt;
    }

    function addElement(mappedArr) {
        if (counter < 10) {
            arrToDisplay.push(mappedArr[counter]);
            counter += 1;
            showResult(arrToDisplay, counter);
        }
        else alert("Sorry, no more elements.");
    }

    let addBtnHandler = function (event) {
        addElement(mappedArr);
    }

    function removeElement(mappedArr, elemToDel) {
        if (counter >= 0) {
            arrToDisplay.splice(elemToDel, 1);
            counter -= 1;
            showResult(arrToDisplay, counter);
        }
        else alert("Sorry, no more elements.");
    }   

    let removeBtnHandler =  function (event) {
        console.log("event");
        console.log(event);
        console.log("currentTarget");
        console.log(event.currentTarget);
        console.log("target");
        console.log(event.target);
        //event.stopPropagation();
        event.stopImmediatePropagation();
    }

    //    function init() {
    // Copy of source data
    let copiedData = data.slice();

    //Remove id and params from data[]
    let newArr = [];
    copiedData.forEach(item => {
        newArr.push({
            url: item.url,
            name: item.name,
            description: item.description,
            date: item.date,
        })
    })

    //Create new mapped array
    let mappedArr = newArr.map(item => {
        return {
            url: `http://${item.url}`,
            name: item.name.charAt(0).toLocaleUpperCase() + `${item.name}`.slice(1).toLowerCase(),
            description: shrinkString(item.description),
            date: moment(item.date).format("YYYY/MM/DD HH:mm"),
        }
    })
    //  }

    //   init();
    addBtn.addEventListener("click", addBtnHandler);
    result.addEventListener("click", removeBtnHandler);

})();