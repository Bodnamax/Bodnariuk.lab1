function redact() {
    var inputText = document.getElementById("txt").value;
    var resultText = inputText.replace(/\s+/g, ' ').replace(/\s*([.,!?;:])\s*/g, '$1 ').replace(/,\s+/g, ', ');
    document.getElementById("result").value = resultText;
}
