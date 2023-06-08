function multiply() {
  let num1, num2, multiply;
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  multiply = parseInt(num1) * parseInt(num2);
  document.getElementById("result").innerHTML = multiply;
}
function divide() {
  let num1, num2, multiply;
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  multiply = parseInt(num1) / parseInt(num2);
  document.getElementById("result").innerHTML = multiply;
}
function sum() {
  let num1, num2, multiply;
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  multiply = parseInt(num1) + parseInt(num2);
  document.getElementById("result").innerHTML = multiply;
}
function minus() {
  let num1, num2, multiply;
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  multiply = parseInt(num1) - parseInt(num2);
  document.getElementById("result").innerHTML = multiply;
}



// depends on take all value from the same place
function equal() {
  let num1, num2, operation;
  num1 = document.getElementById("res").value;
  num2 = eval(num1);
  document.getElementById("res").innerHTML = num2;
}