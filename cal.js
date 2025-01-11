const result = document.getElementById('result');
let currentNumber = "";
let previousNumber = "";
let operator = "";

function performCalculation(previousNum, op, currentNum) {
  let num1 = parseFloat(previousNum);
  let num2 = parseFloat(currentNum);
  let result;

  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case 'x':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        return "Error: Division by zero";
      }
      result = num1 / num2;
      break;
    default:
      return "Error: Invalid operator";
  }

  return result.toString();
}

function appendNumber(number) {
  currentNumber += number;
  result.value = previousNumber + operator + currentNumber;
}

function appendOperator(op) {
  if (currentNumber !== "") {
    if (previousNumber === "") {
      previousNumber = currentNumber;
    }
    operator = op;
    currentNumber = "";
    result.value = previousNumber + operator;
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
    try {
      result.value = performCalculation(previousNumber, operator, currentNumber);
      previousNumber = result.value;
      currentNumber = "";
      operator = "";
    } catch (err) {
      result.value = err;
    }
  }
}
