'use strict';
(function () {
    const btn = document.getElementById("play"),
        firstBlock = document.querySelector('#first-line'),
        secondBlock = document.querySelector('#second-line'),
        thirdBlock = document.querySelector('#third-line'),
        firstGroup = document.querySelector('.first-group'),
        secondGroup = document.querySelector('.second-group'),
        thirdGroup = document.querySelector('.third-group'),
        lineSelector = document.getElementById("line-selector"),
        typeSelector = document.getElementById("type-selector");

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
                name: `${item.name}`.charAt(0).toLocaleUpperCase() + `${item.name}`.slice(1).toLowerCase(),
                description: shrinkString(item.description),
                date: moment(item.date).format("YYYY/MM/DD HH:mm"),
            }
        })

        // Shrink string
        function shrinkString(str) {
            if (str.length >= 15) {
                return str.substring(0, 15) + "...";
            }
            else {
                return str;
            }
        }
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
                replaceStrings();
                break;
            case "2":
                templateStrings();
                break;
            case "3":
                createElement();
                break;
        }

        function replaceStrings() {
            let resultHTML = "";
            for (let i = 0; i < galleryElemQuantity; i++) {
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
            firstGroup.classList.add("show");
            firstGroup.classList.remove("hide");
            secondGroup.classList.add("hide");
            secondGroup.classList.remove("show");
            thirdGroup.classList.add("hide");
            thirdGroup.classList.remove("show");
        }

        function templateStrings() {
            let resultHTML = "";
            for (let i = 0; i < galleryElemQuantity; i++) {
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
            firstGroup.classList.add("hide");
            firstGroup.classList.remove("show");
            secondGroup.classList.add("show");
            secondGroup.classList.remove("hide");
            thirdGroup.classList.add("hide");
            thirdGroup.classList.remove("show");
        }

        function createElement() {
            for (let i = 0; i < galleryElemQuantity; i++) {
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
            firstGroup.classList.add("hide");
            firstGroup.classList.remove("show");
            secondGroup.classList.add("hide");
            secondGroup.classList.remove("show");
            thirdGroup.classList.add("show");
            thirdGroup.classList.remove("hide");
        }
    }

    btn.addEventListener("click", init);

})()