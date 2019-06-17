var btn = document.getElementById("play");

function printResult(resultStr, id = "result") {
   resultStr.forEach(item => { console.log(item) })
   //document.getElementById(id).innerHTML = resultStr;
}

function transform() {
   /* 1. С помощью функции splice необходимо вырезать 6-й элемент массива. 
   В результате ваш массив должен стать короче на один элемент. */
   let removedData = data.splice(6, 1);
   //printResult(removedData);
   //printResult(data);

   /* 2. Используйте функцию forEach.
   Внутри цикла создайте новый массив объектов.
   В процессе создания нового массива объектов, избавьтесь от ключа id. */
   var newArr = [];
   data.forEach(function (item, index) {
      newArr.push({
         url: item.url,
         name: item.name,
         params: item.params,
         description: item.description,
         date: item.date,
      })
   })
   //printResult(newArr);
}



btn.addEventListener("click", transform);