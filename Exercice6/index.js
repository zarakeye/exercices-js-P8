function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    const result = eval(display.value);
    display.value = result !== Infinity ? result : 'Division by zero is not allowed';
}