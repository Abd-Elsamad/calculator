const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");
const operatorButtons = document.querySelectorAll(".operator");
const bracketButtons = document.querySelectorAll(".bracket");
const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(function (button){
    button.addEventListener("click", function () {
        const value = button.textContent;
        if (display.value === "Error") {
            display.value = "";
        }
        if(value === "."){
            const parts = display.value.split(/[\+\-\*\/\(\)]/);
        const currentNumber = parts[parts.length - 1];
        if (currentNumber.includes(".")) {
            return;     
        }
    }
        
        display.value += value;
    });
});
bracketButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (display.value === "Error") {
            display.value = "";
        }
        display.value += button.textContent;
    });
});
operatorButtons.forEach(function (button) {

    button.addEventListener("click", function () {
        const lastChar = display.value.slice(-1);
        const operators = ["+", "-", "*", "/"];
        if (display.value === "") {
            return;
        }
        if (operators.includes(lastChar)) {
            display.value = display.value.slice(0, -1);
        }
        if (display.value === "Error") {
            display.value = "";
        }

        display.value += button.textContent;
    });
});
clearBtn.addEventListener("click", function () {
    display.value = "";
});
deleteBtn.addEventListener("click", function () {
    display.value = display.value.slice(0, -1);
});
equalBtn.addEventListener("click", function () {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
});