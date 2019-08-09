'use strict';
(function () {
    const addBtn = document.getElementById("add"),
        removeBtn = document.getElementsByClassName('btn'),
        result = document.getElementById('result'),
        filterSelector = document.getElementById("filter-selector"),
        count = document.getElementById("count");
        //groupList = document.querySelectorAll('.row[class*=group]');
    
    let counter = 0,
        arrToDisplay = [];

    // Shrink string
    function shrinkString(str) {
                return (str.length >= 15)
                    ? str.substring(0, 15) + "..."
                    : str;
        }

    function showResult(mappedArr) {
        for (let i = 0; i < mappedArr.length; i++) {
        let resultHTML = "";
            resultHTML += `<div class="col-sm-3 col-xs-6">\
            <img src="${mappedArr[i].url}" alt="${mappedArr[i].name}" class="img-thumbnail">\
            <div class="info-wrapper">\
            <div class="text-muted">${mappedArr[i].name}</div>\
            <div class="text-muted top-padding">${mappedArr[i].description}</div>\
            <div class="text-muted">${mappedArr[i].date}</div>\
            </div>\
            </div>
            <button class="btn btn-danger" onclick="removeElement(event)">Удалить</button>`;
    }
        result.innerHTML = resultHTML;
        count.innerHTML = counter;
    }

    function init() {
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
   }

   function addElement(mappedArr) {
       

       counter += 1;
       showResult();
   }

   function removeElement() {
       showResult();
   }

    init();
    addBtn.addEventListener("click", addElement);
    result.addEventListener("click", removeElement);

})();