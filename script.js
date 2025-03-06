const displayElement = document.querySelector(".screen");

const keyId = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
    "enter", "multiply", "divide", "add", "subtract", "decimal", "cls"];
for (let i = 0; i < keyId.length; i++) {
    const selectedKey = document.getElementById(keyId[i]);
    selectedKey.addEventListener("click", displayKey);
}

function displayKey(event) {
    const keyPress = document.createElement("div");
    keyPress.textContent = event.target.textContent;
    if (event.target.className == "button num") {
        displayElement.appendChild(keyPress);  
    } else if (keyPress.textContent == "cls") {
        displayElement.textContent = "";
    } else {
        keyPress.textContent = " " + event.target.textContent + " ";
        keyPress.style.whiteSpace = 'pre';
        displayElement.appendChild(keyPress);
    }
}