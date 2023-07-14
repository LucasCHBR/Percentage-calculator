function calculate() {
    var value = parseFloat(document.getElementById('value').value);
    var percentage = parseFloat(document.getElementById('percentage').value);
    
    var result = (value * percentage) / 100;
    
    document.getElementById('result').textContent = 'Result: ' + result;
}
