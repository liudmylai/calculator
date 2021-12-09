function clickNumber(num) {
    if (num > 0 || (num == 0 && document.getElementById("calc-display").value !== "")) {
        document.getElementById("calc-display").value += num;
    }
}

function clearDisplay() {
    document.getElementById("calc-display").value = "";
}
function plusMinus() {
    if (document.getElementById("calc-display").value !== ""){
        document.getElementById("calc-display").value *=-1;
    }
}
function decimalPlace() {
    let value = document.getElementById("calc-display").value;
    if (value === ""){
        document.getElementById("calc-display").value = "0.";
    } else if (value.indexOf('.') === -1) {
        document.getElementById("calc-display").value += ".";
    }
}