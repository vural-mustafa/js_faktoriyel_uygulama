document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const resultElement = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const inputNumber = parseInt(document.getElementById("number").value);
        if (!isNaN(inputNumber)) {
            const factorial = calculateFactorial(inputNumber);
            resultElement.textContent = `Faktöriyel: ${factorial}`;
        } else {
            resultElement.textContent = "Lütfen geçerli bir sayı girin.";
        }
        
    });

    function calculateFactorial(number) {
        if (number === 0 || number === 1) {
            return 1;
        }
        return number * calculateFactorial(number - 1);
    }

});
