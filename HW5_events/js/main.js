'use strict';

(function () {
    const addBtn = document.getElementById("add"),
        result = document.getElementById('result'),
        filter = document.getElementById("filter-selector"),
        count = document.getElementById("count"),
        arrToDisplay = [];

    let counter = 0;

    // Shrink string
    function shrinkString(str) {
        return (str.length >= 15)
            ? str.substring(0, 15) + "..."
            : str;
    }

    function showResult() {
        let resultHTML = "";
        arrToDisplay.forEach(function (car) {
            resultHTML += `
                            <div class="col-md-3 col-sm-4 col-xs-6">
                            <img src="${car.url}" alt="${car.name}" class="img-thumbnail">
                            <div class="info-wrapper">
                            <div class="text-muted">${car.name}</div>
                            <div class="text-muted top-padding">${car.description}</div>
                            <div class="text-muted">${car.date}</div>
                            <button class="btn btn-danger">Удалить</button>
                            </div>
                            </div>`;
        }
        )
        result.innerHTML = resultHTML;
        count.innerHTML = counter;
    }

    function addElement(mappedArr) {
        if (counter < mappedArr.length) {
            arrToDisplay.push(mappedArr[counter]);
            if (counter === mappedArr.length - 1) {
                addBtn.style.backgroundColor = "grey";
            }
            counter += 1;
            filterThumbnails ();
            showResult();
        }
        else $("#myModal").modal();
    }

    let addBtnHandler = function (event) {
        addElement(mappedArr);
    }

    function removeElement(idxToDel) {
        if (counter >= 0) {
            arrToDisplay.splice(idxToDel, 1);
            if (counter < mappedArr.length - 1) {
                addBtn.style.backgroundColor = "white";
            }
            counter -= 1;
            filterThumbnails ();
            showResult();
        }
    }

    let removeBtnHandler = function (event) {
        if (event.target.localName === "button") {
            let target = event.target.parentElement.previousElementSibling;
            let curSrc = target.currentSrc;
            let idx = arrToDisplay.findIndex(item => item.url === curSrc);
            removeElement(idx);
            event.stopImmediatePropagation();
        }
    }

    function filterThumbnails () {
        let presetFilter = filter.value;
        localStorage['filter'] = presetFilter;
        switch (presetFilter) {
            case "1":
                arrToDisplay.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "2":
                arrToDisplay.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "3":
                arrToDisplay.sort((a, b) => b.date.localeCompare(a.date));
                break;
            case "4":
                arrToDisplay.sort((a, b) => a.date.localeCompare(b.date));
                break;
        }
    }

    let filterHandler = function (event) {
        filterThumbnails ();
        showResult();
    }

    /////////////////////////////////////////////////////////////////////////
    filter.value = localStorage['filter'];

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

    addBtn.addEventListener("click", addBtnHandler);
    result.addEventListener("click", removeBtnHandler);
    filter.addEventListener("change", filterHandler);
})();