function digitBtnPressed(button) {
  //function used to get digits to appear when clicked(function is called on index.html).
  var currentValue = document.getElementById("inputBox").value; //variable used for digits to appear on the input box.
  document.getElementById("inputBox").value = currentValue + button; //used for values to output/appear at once on the inputBox.
}
