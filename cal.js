const result = document.getElementById('result');
let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  result.value = currentNumber;
}

function appendOperator(op) {
  if (currentNumber !== "") {
    previousNumber = currentNumber;
    currentNumber = "";
    operator = op;
  }
}

function clearScreen() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  result.value = "";
}

function calculate() {
  if (currentNumber !== "" && operator !== "") {
    let calculation = `${previousNumber} ${operator} ${currentNumber}`;
    try {
      result.value = eval(calculation);
      previousNumber = result.value;
      currentNumber = "";
      operator = "";
    } catch (err) {
      result.value = "Error";
    }
  }
}
