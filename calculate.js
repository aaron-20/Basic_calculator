const charDisplay = document.getElementById("display");

function appendToDisplay(input) {
    charDisplay.value += input;
}

function clearDisplay(){
    charDisplay.value="";
}

function calculate() {
    charDisplay.value = eval(charDisplay.value);
}