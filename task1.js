function calculate() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);

  if (isNaN(num1) || isNaN(num2)) {
      alert('Будь ласка, введіть коректні числа.');
      return;
  }

  var sum = num1 + num2;
  var difference = num1 - num2;
  var product = num1 * num2;
  var quotient = num1 / num2;

  document.getElementById('result').innerHTML = 'Результат: <br>' +
      '<p>Сума: </p>' + sum + '<br>' +
      '<p>Різниця: </p>' + difference + '<br>' +
      '<p>Остача: </p>' + product + '<br>' +
      '<p>Добуток: </p>' + quotient;
}
