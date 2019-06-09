// Main function call
(function run() {
    var resultStr = "";
    var total = 0;

    // Random number generation
    function getRndNumber() {
        return Math.floor((Math.random() * 6) + 1);
    }
    // Set result
    function setResult(str) {
        return resultStr += str;
    }
    // Compare two numbers
    function isNumbersEqual(num1, num2) {
        if (num1 == num2) {
            setResult("Выпал дубль. Число " + num1 + " <br>");
        }
    }
    // Big difference between two numbers
    function isBigDifference(num1, num2) {
        if (num1 < 3 && num2 > 4) {
            setResult("Большой разброс между костями. Разница составляет: " + Math.abs(num2 - num1) + "<br>");
        }
    }
    // Total result
    function totalResult(num1, num2) {
        return total += num1 + num2;
    }
    // Print result
    function printResult(total, id = "result") {
        total > 100 ? setResult("Победа, вы набрали " + total + " очков")
            : setResult("Вы проиграли, у вас " + total + " очков");
        //console.log(resultStr);
        document.getElementById(id).innerHTML = resultStr;
    }

    for (var i = 0; i < 15; i++) {
        if (i == 8 || i == 13) {
            continue;
        }
        // First random number generation:
        var first = getRndNumber();
        // Second random number generation:    
        var second = getRndNumber();
        // Print result    
        setResult("Первая кость: " + first + " Вторая кость: " + second + "<br>");
        // Compare two numbers:
        isNumbersEqual(first, second);
        // Is big diff?
        isBigDifference(first, second);
        //
        totalResult(first, second);
    }
    // Print total result
    printResult(total);

})();

