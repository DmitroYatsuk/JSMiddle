'use strict';
(function () {
    const btn = document.getElementById("play"),
        firstBlock = document.getElementById('first-line'),
        secondBlock = document.getElementById('second-line'),
        thirdBlock = document.getElementById('third-line'),
        lineSelector = document.getElementById("line-selector"),
        typeSelector = document.getElementById("type-selector"),
        groupList = document.querySelectorAll('.row[class*=group]');

    // Shrink string
    function shrinkString(str) {
                return (str.length >= 15)
                    ? str.substring(0, 15) + "..."
                    : str;
        }

    function showBlock(elementNumber, groupList) {
        for (let i = 0; i < groupList.length; i++) {
        groupList[i].classList.remove('show');
        groupList[i].classList.add('hide');
        }
        groupList[elementNumber - 1].classList.remove('hide');
        groupList[elementNumber - 1].classList.add('show');
    }

/*     function replaceStrings(elements, mappedArr) {
        let resultHTML = "";
        for (let i = 0; i < elements; i++) {
            let replaceItemTemplate = '<div class="col-sm-3 col-xs-6">\
                <img src="$url" alt="$name" class="img-thumbnail">\
                <div class="info-wrapper">\
                <div class="text-muted">$name</div>\
                <div class="text-muted top-padding">$description</div>\
                <div class="text-muted">$date</div>\
                </div>\
                </div>';
            resultHTML += replaceItemTemplate
                .replace(/\$name/gi, mappedArr[i].name)
                .replace("$url", mappedArr[i].url)
                .replace("$description", mappedArr[i].description)
                .replace("$date", mappedArr[i].date);
        }
        firstBlock.innerHTML = resultHTML;
        showBlock(1, groupList);
    } */

    function templateStrings(elements, mappedArr) {
        let resultHTML = "";
        for (let i = 0; i < elements; i++) {
            let tempItem = `<div class="col-sm-3 col-xs-6">\
            <img src="${mappedArr[i].url}" alt="${mappedArr[i].name}" class="img-thumbnail">\
            <div class="info-wrapper">\
            <div class="text-muted">${mappedArr[i].name}</div>\
            <div class="text-muted top-padding">${mappedArr[i].description}</div>\
            <div class="text-muted">${mappedArr[i].date}</div>\
            </div>\
            </div>`;
            resultHTML += tempItem;
        }
        secondBlock.innerHTML = resultHTML;
        showBlock(2, groupList);
    }

/*     function createElement(elements, mappedArr) {
        thirdBlock.innerHTML = '';
        for (let i = 0; i < elements; i++) {
            const divOne = document.createElement("div"),
                divTwo = document.createElement("div"),
                divThree = document.createElement("div"),
                divFour = document.createElement("div"),
                divFive = document.createElement("div"),
                image = document.createElement("img");
            divOne.classList.add("col-sm-3", "col-xs-6");
            image.src = mappedArr[i].url;
            image.alt = mappedArr[i].name;
            image.classList.add("img-thumbnail");
            divTwo.classList.add("info-wrapper");
            divThree.classList.add("text-muted");
            divThree.textContent = mappedArr[i].name;
            divFour.classList.add("text-muted", "top-padding");
            divFour.textContent = mappedArr[i].description;
            divFive.classList.add("text-muted");
            divFive.textContent = mappedArr[i].date;
            divTwo.appendChild(divThree);
            divTwo.appendChild(divFour);
            divTwo.appendChild(divFive);
            divOne.appendChild(image);
            divOne.appendChild(divTwo);
            thirdBlock.appendChild(divOne);
        }
        showBlock(3, groupList);
    } */

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

        let galleryElemQuantity;
        // Определить количество элементов, которые будете показывать в галерее. 
        switch (lineSelector.value) {
            case "0":
                galleryElemQuantity = mappedArr.length;
                break;
            case "1":
                galleryElemQuantity = 3;
                break;
            case "2":
                galleryElemQuantity = 6;
                break;
        }
        // сначала снимаете значение с селектбокса, 
        switch (typeSelector.value) {
            case "1":
                replaceStrings(galleryElemQuantity, mappedArr);
                break;
            case "2":
                templateStrings(galleryElemQuantity, mappedArr);
                break;
            case "3":
                createElement(galleryElemQuantity, mappedArr);
                break;
        }        
    }
    btn.addEventListener("click", init);
})()