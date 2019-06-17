var btn = document.getElementById("play");

function printResult(resultStr, id = "result") {
   document.getElementById(id).innerHTML = resultStr;
}

function transform() {
   /* 1. С помощью функции splice необходимо вырезать 6-й элемент массива. 
   В результате ваш массив должен стать короче на один элемент. */
   let removedData = data.splice(6, 1);
   //printResult(removedData);
   //printResult(data);

   
}



btn.addEventListener("click", transform);