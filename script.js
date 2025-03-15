const displayElement = document.querySelector(".screen");

const keyId = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
    "enter", "multiply", "divide", "add", "subtract", "decimal", "cls"];
for (let i = 0; i < keyId.length; i++) {
    const selectedKey = document.getElementById(keyId[i]);
    selectedKey.addEventListener("click", displayKey);
}

var firstNum = "";
var secondNum = "";
var opPressed = false;
let operator = "";

function displayKey(event) {
    
    const keyPress = document.createElement("div");
    keyPress.textContent = event.target.textContent;
    if (event.target.className === "button num") {
        displayElement.appendChild(keyPress);
        if (opPressed === false) {
            firstNum += event.target.textContent;
        } else {
            secondNum += event.target.textContent;
        }  
    } else if (keyPress.textContent === "cls") {
        displayElement.textContent = "";
        firstNum = "";
        secondNum = "";
        operator = "";
        opPressed = false;
    } else if (event.target.className === "button op") { 
        keyPress.textContent = " " + event.target.textContent + " ";
        keyPress.style.whiteSpace = 'pre';
        displayElement.appendChild(keyPress);
        operator = keyPress.textContent;
        opPressed = true;
    } else {
        displayElement.textContent = "";
        if (operator === " + ") {
             keyPress.textContent = Number(firstNum) + Number(secondNum);
             displayElement.appendChild(keyPress);
        } else if (operator === " - ") {
            keyPress.textContent = Number(firstNum) - Number(secondNum);
            displayElement.appendChild(keyPress);
        } else if (operator === " / ") {
            if (Number(secondNum) === 0) {
                keyPress.textContent = "Don't divide by 0!";
                displayElement.appendChild(keyPress);
            } else {
                keyPress.textContent = Number(firstNum) / Number(secondNum);
                displayElement.appendChild(keyPress);
            }
        } else {
            keyPress.textContent = Number(firstNum) * Number(secondNum);
            displayElement.appendChild(keyPress);
        }
    }
}