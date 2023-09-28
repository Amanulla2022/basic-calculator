// For Elements
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operatorText = document.getElementById("operator");
const resultText = document.getElementById("result");
const totalOperationText = document.querySelector("h1");

//For Buttons
const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const divBtn = document.getElementById("divide");
const mulBtn = document.getElementById("mul");
const resetBtn = document.getElementById("reset");

// Initialize operator and total operation text
let operator = "+";
operatorText.textContent = operator;

// Initialize total operations
let totalOperations = 0;

// addding some calculation history
const calculationHistory = [];

// Add event listners for the operator buttons
addBtn.addEventListener("click", () => {
  operator = "+";
  operatorText.textContent = operator;
  updateTotalOperations();
  calculate("+");
});

subBtn.addEventListener("click", () => {
  operator = "-";
  operatorText.textContent = operator;
  updateTotalOperations();
  calculate("-");
});

divBtn.addEventListener("click", () => {
  operator = "/";
  operatorText.textContent = operator;
  updateTotalOperations();
  calculate("/");
});

mulBtn.addEventListener("click", () => {
  operator = "*";
  operatorText.textContent = operator;
  updateTotalOperations();
  calculate("*");
});

//Calculate function  depending on operator
function calculate() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    default:
      result = 0;
      break;
  }

  // Store the current calculation in history
  const calculationString = `${num1} ${operator} ${num2} = ${result}`;
  calculationHistory.push(calculationString);

  resultText.textContent = result;
  // Show the "Result" heading
  const resultHeading = document.getElementById("resultHeading");
  resultHeading.style.display = "block";
}

//update the total operations count
function updateTotalOperations() {
  totalOperations++;
  totalOperationText.textContent = `Total Operation: ${totalOperations}`;
}
// Reset button
resetBtn.addEventListener("click", () => {
  num1Input.value = "";
  num2Input.value = "";
  operatorText.textContent = operator;
  resultText.textContent = "0";
  resultHeading.style.display = "none"; // Hide the "Result" heading
});

//Added history button and history display
const toggleHistoryBtn = document.getElementById("toggleHistory");
const historyDisplay = document.getElementById("historyDisplay");

let isHistoryVisible = false;

toggleHistoryBtn.addEventListener("click", () => {
  if (isHistoryVisible) {
    // Hide the history and change button text
    historyDisplay.style.display = "none";
    toggleHistoryBtn.textContent = "Show History";
    // Show the operation display
    totalOperationText.style.display = "block";
  } else {
    // Show the history and change button text
    historyDisplay.style.display = "block";
    toggleHistoryBtn.textContent = "Hide History";
    // Hide the operation display
    totalOperationText.style.display = "none";
    // Call showHistory to display previous operations
    showHistory();
  }
  isHistoryVisible = !isHistoryVisible; // Toggle the visibility flag
});

function showHistory() {
  // Clear previous history display
  historyDisplay.innerHTML = "";

  // Display each calculation in the history
  for (let i = 0; i < calculationHistory.length; i++) {
    const calculation = document.createElement("p");
    calculation.textContent = calculationHistory[i];
    historyDisplay.appendChild(calculation);
  }
}
