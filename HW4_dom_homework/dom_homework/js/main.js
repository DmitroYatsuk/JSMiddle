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

    // сначала снимаете значение с селектбокса, 
    let typeSelector = document.getElementById("type-selector").value;
    /* Определить количество элементов, которые будете показывать в галерее. 
    Для этого снять значение со второго селектбокса. */
    let lineSelector = document.getElementById("line-selector").value;

    function init() {

        // определяете какой способ построения галлереи надо использовать
        switch (typeSelector) {
            case 0:
                break;
            case 1:
                //
                break;
            case 2:
                //
                break;
            case 3:
                //
                break;
            default:
                break;
        }
        // запускаете необходимую логику
        for (let i = 0; i < lineSelector; i++) {
            
        }

        // код ниже дан для справки, вам нужно будет использовать тот вариан который вы выбрали в селектбоксе
        // пример построения галлереи с помощю replace
        let replaceItemTemplate = '<div class="col-sm-3 col-xs-6">\
    <img src="$url" alt="$name" class="img-thumbnail">\
    <div class="info-wrapper">\
    <div class="text-muted">$name</div>\
    <div class="text-muted top-padding">$description</div>\
    <div class="text-muted">$date</div>\
    </div>\
    </div>';

        let resultHTML = replaceItemTemplate
            .replace(/\$name/gi, item.name)
            .replace("$url", item.url)
            .replace("$description", item.description)
            .replace("$date", item.date);

        firstBlock.innerHTML = resultHTML;

        // один из примеров как прятать блоки
        document.querySelector('.first-group').classList.add("show");
        document.querySelector('.second-group').classList.add("hide");
        document.querySelector('.third-group').classList.add("hide");

        // пример построения галлереи с помощю шаблонных строк
        let secondItemTemplate = `<div class="col-sm-3 col-xs-6">\
    <img src="${item.url}" alt="${item.name}" class="img-thumbnail">\
    <div class="info-wrapper">\
        <div class="text-muted">${item.name}</div>\
        <div class="text-muted top-padding">${item.description}</div>\
        <div class="text-muted">${item.date}</div>\
    </div>\
    </div>`;
        //secondBlock.innerHTML = secondItemTemplate;	

    }

    btn.addEventListener("click", init);

})()