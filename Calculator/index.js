
function appendSymbol(symbol) {
    const display = document.getElementById('display');
    display.value += symbol;
}


function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}


function deleteDigit() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}


function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
