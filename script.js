const displayElement = document.querySelector(".screen");
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["multiply", "divide", "add", "subtract"]
for (let i = 0; i < numbers.length; i++) {
    const selectedKey = document.getElementById(numbers[i]);
    selectedKey.addEventListener("click", displayNumber);
}
for (let i = 0; i < operators.length; i++) {
    const selectedKey = document.getElementById(operators[i]);
    selectedKey.addEventListener("click", displayOperator);
}
const enterPress = document.getElementById("enter");
enterPress.addEventListener("click", calculate);

const clsPress = document.getElementById("cls");
clsPress.addEventListener("click", clearScreen);

const decPress = document.getElementById("decimal");
decPress.addEventListener("click", displayDec);

var firstNum = "";
var secondNum = "";
var result = "";
var operator = "";
var opUsed = false;
var newNum = true;
var decUsed = false;

function clearScreen(event) {
    displayElement.textContent = "";
    firstNum = "";
    secondNum = "";
    result = "";
    operator = "";
    opUsed = false;
    newNum = true;
    decUsed = false;
}

function displayNumber(event) {
    const numPress = document.createElement("div");
    numPress.textContent = event.target.textContent;
    displayElement.appendChild(numPress);
    if (opUsed === false) {
        firstNum += event.target.textContent;
        newNum = false;
    } else {
        secondNum += event.target.textContent;
        newNum = false;
    }  
}

function displayOperator(event) {
    if (opUsed === true) {
        return;
    } else {
        const opPress = document.createElement("div");
        operator = event.target.textContent;
        opPress.textContent = " " + operator + " ";
        opPress.style.whiteSpace = 'pre';
        displayElement.appendChild(opPress);
        opUsed = true;
        newNum = true;
        decUsed = false;
    }
}

function displayDec(event) {
    if (decUsed === true) {
        return;
    } else {
        const decPress = document.createElement("div");
        if (newNum === true) {
            decPress.textContent = "0" + event.target.textContent;
        } else {
            decPress.textContent = event.target.textContent;
        }
        displayElement.appendChild(decPress);
        if (opUsed === false) {
            firstNum += event.target.textContent;
            newNum = false;
        } else {
            secondNum += event.target.textContent;
            newNum = false;
        }  
        decUsed = true;
    }
}

function calculate() {
    const keyPress = document.createElement("div");
    displayElement.textContent = "";
    if (operator === "+") {
        result =  Number(firstNum) + Number(secondNum);
        keyPress.textContent = Number(Math.round(result + 'e6') + 'e-6');
        displayElement.appendChild(keyPress);
    } else if (operator === "-") {
        result =  Number(firstNum) - Number(secondNum);
        keyPress.textContent = Number(Math.round(result + 'e6') + 'e-6');
        displayElement.appendChild(keyPress);
    } else if (operator === "/") {
        if (Number(secondNum) === 0) {
            keyPress.textContent = "Don't divide by 0! ";
            displayElement.appendChild(keyPress);
        } else { 
            result =  Number(firstNum) / Number(secondNum);
            keyPress.textContent = Number(Math.round(result + 'e6') + 'e-6');
            displayElement.appendChild(keyPress);
        }
    } else { //Multiply
        result =  Number(firstNum) * Number(secondNum);
        keyPress.textContent = Number(Math.round(result + 'e6') + 'e-6');
        displayElement.appendChild(keyPress);
    }
    firstNum = result;
    secondNum = "";
    operator = "";
    opUsed = false;
}