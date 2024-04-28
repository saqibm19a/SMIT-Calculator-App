let currentNumber = "";
let previousNumber = "";
let operator = "";

const display = document.getElementById("result");

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function appendOperator(op) {
    previousNumber = currentNumber;
    currentNumber = "";
    operator = op;
}

function clearDisplay() {
    currentNumber = "";
    previousNumber = "";
    operator = "";
    display.value = "";
}

function calculate() {
    let result = 0;
    if (operator === "+") {
        result = parseFloat(previousNumber) + parseFloat(currentNumber);
    } else if (operator === "-") {
        result = parseFloat(previousNumber) - parseFloat(currentNumber);
    } else if (operator === "*") {
        result = parseFloat(previousNumber) * parseFloat(currentNumber);
    } else if (operator === "/") {
        result = parseFloat(previousNumber) / parseFloat(currentNumber);
    }
    currentNumber = result.toString();
    display.value = currentNumber;
}