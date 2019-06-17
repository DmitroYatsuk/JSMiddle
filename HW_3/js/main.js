var btn = document.getElementById("play");

function printResult(resultStr) {
   resultStr.forEach(item => { console.log(item) })
}

function transform() {
   /* 1. С помощью функции splice необходимо вырезать 6-й элемент массива. 
   В результате ваш массив должен стать короче на один элемент. */
   let removedData = data.slice().splice(6, 1);
   printResult(removedData);
   console.log("End of removedData ==================");
   printResult(data);
   console.log("End of data ==================");

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

   /* 3. По новому массиву объектов, 
   полученному с помощью функции forEach пройдитесь методом map() */
   var mappedArr = newArr.map(item => {
      return {
         url: `http://${item.url}`,
         name: `${item.name}`.charAt(0).toLocaleUpperCase() + `${item.name}`.slice(1).toLowerCase(),
         //name: String(item.name).charAt(0).toLocaleUpperCase() + String(item.name).slice(1).toLowerCase(),
         params: `${item.params.status}=>${item.params.progress}`,
         description: `${item.description}`.substring(0, 15),
         //description: String(item.description).substring(0, 15),
         date: moment(item.date).format("YYYY/MM/DD hh:mm"),
         //date: newDate(item.date),
         isVisible: item.params.status,
      }
   })

   function newDate(date) {
      var tmpDate = new Date(date);
      return tmpDate.getFullYear() + "/" +
         tmpDate.getMonth() + "/" +
         tmpDate.getDate() + " " +
         tmpDate.getHours() + ":" +
         tmpDate.getMinutes();
   }

   printResult(mappedArr);
   console.log("End of mappedArr ==================");

   /*    9*.(дополнительное задание)
   Более предпочтительно работать с датой с помощью библиотеки moment.js
   Постарайтесь разобраться как она работает и использовать ее вместо примера выше. Если очень тяжело — используйте подход выше. */



   /* 10. Для поля params: из значений ключей сформировать строку типа «true=>80». Для выполнения задания можно обращаться к полям объект params напрямую.
   То есть params.status и params.progress */



   /* 11. Создать новое поле isVisible. Переложить в это поле значение поля params.status. */

   /* 12. После всех преобразований функция map вернет вам новый массив. Теперь с помощью функции filter вам необходимо выбрать только те элементы у которых isVisible == true. Пример работы функции filter есть в презентации. */

   var filteredArr = mappedArr.filter(item => item.isVisible == true );
   printResult(filteredArr);
   console.log("End of filteredArr ==================");


   /* 13. Полученный результат печатаем в консоль.
   Для печати используем отдельную функцию как в прошлых заданиях. То есть вынесете console.log в отдельную функцию. */
}



btn.addEventListener("click", transform);