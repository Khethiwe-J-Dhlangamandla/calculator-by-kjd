var newline = true; //global variable because it is outside of function and is a boolean.

function digitBtnPressed(button) {
  //function used to get digits to appear when clicked(function is called on index.html).

  if (newline == true) {
    //this will aid to remove zero and have digits appear normaly
    document.getElementById("inputBox").value = button;
    newline = false;
  } else {
    var currentValue = document.getElementById("inputBox").value; //variable used for digits to appear on the input box.
    document.getElementById("inputBox").value = currentValue + button; //used for values to output/appear at once on the inputBox.
  }
}
