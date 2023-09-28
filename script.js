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

// Add event listners for the operator buttons
addBtn.addEventListener("click", () => {
  operator = "+";
  operatorText.textContent = operator;
  calculate("+");
});

subBtn.addEventListener("click", () => {
  operator = "-";
  operatorText.textContent = operator;
  calculate("-");
});

divBtn.addEventListener("click", () => {
  operator = "/";
  operatorText.textContent = operator;
  calculate("/");
});

mulBtn.addEventListener("click", () => {
  operator = "*";
  operatorText.textContent = operator;
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

  resultText.textContent = result;
  // Show the "Result" heading
  const resultHeading = document.getElementById("resultHeading");
  resultHeading.style.display = "block";
}

// Reset button
resetBtn.addEventListener("click", () => {
  num1Input.value = "";
  num2Input.value = "";
  operatorText.textContent = operator;
  resultText.textContent = "0";
  resultHeading.style.display = "none"; // Hide the "Result" heading
});
