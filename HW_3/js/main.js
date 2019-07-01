'use strict';

let btn = document.getElementById("play");

function printResult(resultStr) {
   resultStr.forEach(item => { console.log(item) })
}

function transform() {
   // Copy of source data
   let copiedData = data.slice();

   /* 1. С помощью функции splice необходимо вырезать 6-й элемент массива. 
   В результате ваш массив должен стать короче на один элемент. */

   let removedData = copiedData.splice(6, 1);

   /* 2. Используйте функцию forEach.
   Внутри цикла создайте новый массив объектов.
   В процессе создания нового массива объектов, избавьтесь от ключа id. */

   let newArr = [];
   copiedData.forEach((item, index) => {
      newArr.push({
         url: item.url,
         name: item.name,
         params: item.params,
         description: item.description,
         date: item.date,
      })
   })

   /*
   3. По новому массиву объектов, 
   полученному с помощью функции forEach пройдитесь методом map()
   4. На каждой итерации цикла мы получаем один объект из массива объектов. 
   Берем этот объект и преобразоваем его поля по следующим правилам:
   5. Для поля Name: с помощью функций работы со стрингами делаете первую букву большой, остальные маленькие (ДЖИП -> Джип)
   6. Для поля url: добавить перед ним «http://»
   7. Для поля Description: с помощью функций работы со стрингами делаете обрезание до 15 символов. 
   После добавляем многоточие (…) Остальное отбрасываете.
   8. Для поля date: создать объект даты из заданных миллисекунд и потом отобразить в виде «2015/07/02 14:15»
   9*.(дополнительное задание)
   Более предпочтительно работать с датой с помощью библиотеки moment.js
   Постарайтесь разобраться как она работает и использовать ее вместо примера выше. Если очень тяжело — используйте подход выше.
   10. Для поля params: из значений ключей сформировать строку типа «true=>80». Для выполнения задания можно обращаться к полям объект params напрямую.
   То есть params.status и params.progress
   11. Создать новое поле isVisible. Переложить в это поле значение поля params.status.
   12. После всех преобразований функция map вернет вам новый массив. 
   Теперь с помощью функции filter вам необходимо выбрать только те элементы у которых isVisible == true. 
   Пример работы функции filter есть в презентации.
   13. Полученный результат печатаем в консоль.
   Для печати используем отдельную функцию как в прошлых заданиях. То есть вынесете console.log в отдельную функцию. */

   let mappedArr = newArr.map(item => {
      return {
         url: `http://${item.url}`,
         name: `${item.name}`.charAt(0).toLocaleUpperCase() + `${item.name}`.slice(1).toLowerCase(),
         //name: String(item.name).charAt(0).toLocaleUpperCase() + String(item.name).slice(1).toLowerCase(),
         params: `${item.params.status}=>${item.params.progress}`,
         //description: shrinkString(item.description),
         description: `${item.description}`.substring(0, 15) + "...",
         //description: String(item.description).substring(0, 15) + "...",
         //date: moment(item.date).format("YYYY/MM/DD HH:mm"),
         date: newDate(item.date),
         isVisible: item.params.status,
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

   let filteredArr = mappedArr.filter(item => item.isVisible == true);
   printResult(filteredArr);
}

btn.addEventListener("click", transform);