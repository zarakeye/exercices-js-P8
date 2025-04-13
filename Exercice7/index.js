const decimalInput = document.getElementById('decimalInput');
const binaryResult = document.getElementById('binaryResult');

function convertToBinary() {
    let decimal; 
    let binary = '';

    if (/^\d+$/.test(decimalInput.value)) {
        decimal = parseInt(decimalInput.value);

        while (decimal > 0) {
            binary = (decimal % 2) + binary;
            decimal = Math.floor(decimal / 2);
        }

        binaryResult.textContent = binary || '0';
    } else {
        binaryResult.textContent = '';
    }
}