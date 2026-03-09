let num1 = 8;
let num2 = 2;
let history = [];

// Get elements
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
document.getElementById("input1").value = num1;
document.getElementById("input2").value = num2;

let sumEl = document.getElementById("sum-el");
let historyEl = document.getElementById("history-el");

// Update functions for input fields
function updateNum1() {
  num1 = parseFloat(document.getElementById("input1").value) || 0;
  document.getElementById("num1-el").textContent = num1;
}

function updateNum2() {
  num2 = parseFloat(document.getElementById("input2").value) || 0;
  document.getElementById("num2-el").textContent = num2;
}

// Helper function to save to history
function saveToHistory(operation, result) {
  let calculation = `${num1} ${operation} ${num2} = ${result}`;
  history.push(calculation);
  historyEl.textContent = history.join(" | ");
}

// Clear history function
function clearHistory() {
  history = [];
  historyEl.textContent = "No calculations yet";
}

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

function add() {
  let result = num1 + num2;
  sumEl.textContent = "Result: " + result;
  saveToHistory("+", result);
}

function subtract() {
  let result = num1 - num2;
  sumEl.textContent = "Result: " + result;
  saveToHistory("-", result);
}

function divide() {
  let result = num1 / num2;
  sumEl.textContent = "Result: " + result.toFixed(2);
  saveToHistory("÷", result.toFixed(2));
}

function multiply() {
  let result = num1 * num2;
  sumEl.textContent = "Result: " + result;
  saveToHistory("×", result);
}
