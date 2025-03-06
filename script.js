
for (let i = 0; i <= 9; i++) {
    const numKey = document.getElementById(i);
    numKey.addEventListener("click", capturePress);
}

const keyArray = ["enter", "multiply", "divide", "add", "subtract", "decimal", "cls"];
for (let i = 0; i < keyArray.length; i++) {
    const textKey = document.getElementById(keyArray[i]);
    textKey.addEventListener("click", capturePress);
}

function capturePress(event) {
    const numPress = event.target.textContent;
    console.log(numPress);
}