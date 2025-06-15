var newline = true; //Boolean variable, determines if the next digit entered should be on a new line.
var onScreenValue; //Integer variable, stores the currently displayed value.
var currentOperator; //String variable, stores the value of the current pressed operator. 

//Event handler for when a digit button is pressed
function btnDgtPress(btnNum) {
    if (newline == true) {
        document.getElementById("inputBox").value = btnNum;
        newline = false;
    } else {
        var currentValue = document.getElementById("inputBox").value;
        document.getElementById("inputBox").value = currentValue + btnNum;
    }
}

//Event handler for when the AC button is pressed.
function btnClear() {
    document.getElementById("inputBox").value = 0;
    newline = true;
}

//Event handler for when any operator button is pressed.
function btnOperator(operator) {
    currentOperator = operator;
    onScreenValue = parseInt(document.getElementById("inputBox").value);
    newline = true;
}

//Event handler for when Equals button is pressed
function btnEquals() {
    var value2 = parseInt(document.getElementById("inputBox").value);
    var finalTotal;

    switch (currentOperator) {
        case "x":
            finalTotal = onScreenValue * value2;
            break;
            case "-":
            finalTotal = onScreenValue - value2;
            break;
            case "+":
            finalTotal = onScreenValue + value2;
            break;
            case "/":
            finalTotal = onScreenValue / value2;
            break;
    }

    document.getElementById("inputBox").value = finalTotal;
    onScreenValue = 0;
    newline = true;
}

