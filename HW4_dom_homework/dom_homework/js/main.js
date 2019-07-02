(function () {


    let btn = document.getElementById("play"),
        firstBlock = document.querySelector('#first-line'),
        secondBlock = document.querySelector('#second-line'),
        thirdBlock = document.querySelector('#third-line');

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
            //date: moment(item.date).format("YYYY/MM/DD HH:mm"),
            date: newDate(item.date),
        }
    })

    // Date formatting fn
    function newDate(date) {
        let tmpDate = new Date(date);
        return tmpDate.getFullYear() + "/" +
            lessThanTen(tmpDate.getMonth() + 1) + "/" +
            lessThanTen(tmpDate.getDate()) + " " +
            lessThanTen(tmpDate.getHours()) + ":" +
            lessThanTen(tmpDate.getMinutes());
    }

    function lessThanTen(num) {
        return num < 10 ? "0" + num : num;
    }

    // Shrink string
    function shrinkString(str) {
        if (str.length >= 15) {
            return str.substring(0, 15) + "...";
        }
        else {
            return str;
        }
    }

    function init() {
        let galleryElemQuantity;
        // Определить количество элементов, которые будете показывать в галерее. 
        let lineSelector = document.getElementById("line-selector").value;
        switch (lineSelector) {
            case "0":
                galleryElemQuantity = mappedArr.length;
                break;
            case "1":
                galleryElemQuantity = 3;
                break;
            case "2":
                galleryElemQuantity = 6;
                break;
            default:
                break;
        }
        // сначала снимаете значение с селектбокса, 
        let typeSelector = document.getElementById("type-selector").value;
        switch (typeSelector) {
            case 0:
                break;
            case "1":
                replaceStrings();
                break;
            case "2":
                templateStrings();
                break;
            case "3":
                createElement();
                break;
            default:
                break;
        }

        //с помощю replace
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
                let tempItem = replaceItemTemplate
                    .replace(/\$name/gi, mappedArr[i].name)
                    .replace("$url", mappedArr[i].url)
                    .replace("$description", mappedArr[i].description)
                    .replace("$date", mappedArr[i].date);
                resultHTML += tempItem;
            }
            firstBlock.innerHTML = resultHTML;
            document.querySelector('.first-group').classList.add("show");
            document.querySelector('.second-group').classList.add("hide");
            document.querySelector('.third-group').classList.add("hide");
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
            document.querySelector('.first-group').classList.add("hide");
            document.querySelector('.second-group').classList.add("show");
            document.querySelector('.third-group').classList.add("hide");
        }

        function createElement() {
            thirdBlock.innerHTML = thirdItemTemplate;
            document.querySelector('.first-group').classList.add("hide");
            document.querySelector('.second-group').classList.add("hide");
            document.querySelector('.third-group').classList.add("show");
        }
    }

    btn.addEventListener("click", init);

})()