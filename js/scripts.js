function clickNumber(num) {
    if (num > 0 || (num == 0 && document.getElementById("calc-display").value !== "")) {
        document.getElementById("calc-display").value += num;
    }
}

function clearDisplay() {
    document.getElementById("calc-display").value = "";
}


