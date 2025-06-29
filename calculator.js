var newLine = true; //global variable because it is outside of function and is a boolean.
var value1;
var currentOperator;

//Event handler for when any digit button is pressed
function digitBtnPressed(button) {
  //function used to get digits to appear when clicked(function is called on index.html).

  if (newLine == true) {
    //this will aid to remove zero and have digits appear normaly
    document.getElementById("inputBox").value = button;
    newLine = false;
  } else {
    var currentValue = document.getElementById("inputBox").value; //variable used for digits to appear on the input box.
    document.getElementById("inputBox").value = currentValue + button; //used for values to output/appear at once on the inputBox.
  }
}

//Event handler for when AC button is pressed
function btnACPressed() {
  //function that will reset input box and clear values when not needed, call it in html
  document.getElementById("inputBox").value = 0;
  newLine = true;
}

//Event handle for the operating signs when pressed.
function operatorBtnPressed(operator) {
  currentOperator = operator;
  value1 = parseInt(document.getElementById("inputBox").value);
  newLine = true;
}
//line29 parseInt is used as convertor from text to number value.
//line29 also means = grab whatever output appears on inputbox, convert it to number and store it in value1.

//Event handler for equal sign button
function equalBtnPressed() {
  var value2 = parseInt(document.getElementById("inputBox").value);
  var finalTotal; //stores the answer

  switch (currentOperator) {
    case "+":
      finalTotal = value1 + value2;
      break;
    case "-":
      finalTotal = value1 - value2;
      break;
    case "*":
      finalTotal = value1 * value2;
      break;
    case "/":
      finalTotal = value1 / value2;
      break;
  }
  document.getElementById("inputBox").value = finalTotal; //output the value stored in finalTotal

  value1 = 0; //line56&57 is preparing for next operation
  newLine = true;
}
