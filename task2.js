function convert() {

  var amount = parseInt(document.getElementById('amount').value);

  if (isNaN(amount) || amount < 0) {
      alert('Будь ласка, введіть невід\'ємне ціле число.');
      return;
  }

  var currencyText = '';
  if (amount%10 === 0) {
      currencyText = 'гривень';
  } else if (amount%10 === 1) {
      currencyText = 'гривня';
  } else if (amount%10 >= 2 && amount%10 <= 4) {
      currencyText = 'гривні';
  } else {
      currencyText = 'гривень';
  }

  document.getElementById('result').innerHTML = 'Результат: ' + amount + ' ' + currencyText;
}
