const form = document.querySelector('form');

const nettoToBrutto = document.getElementById('nettoToBrutto');
const bruttoToNetto = document.getElementById('bruttoToNetto');

const tax19percent = document.getElementById('tax19percent');
const tax7percent = document.getElementById('tax7percent');

const typeOfCalculation = document.getElementById('typeOfCalculation');
const inputSum = document.getElementById('inputSum');
const inputSumTag = document.getElementById('inputSumTag');
const inputSumDisplay = document.getElementById('inputSumDisplay');

const vatAmount = document.getElementById('vatAmount');
const outputVat = document.getElementById('outputVat');

const endResultDescription = document.getElementById('endResultDescription');
const endResult = document.getElementById('endResult');

function nettoOrBrutto() {
  if (nettoToBrutto.checked === true) {
    typeOfCalculation.innerHTML = 'Nettobetrag in Euro';
    inputSumTag.innerHTML = 'Nettobetrag';
    endResultDescription.innerHTML = 'Bruttobetrag (Endpreis)';
  } else {
    typeOfCalculation.innerHTML = 'Bruttobetrag in Euro';
    inputSumTag.innerHTML = 'Bruttobetrag';
    endResultDescription.innerHTML = 'Nettobetrag';
  }
}

function calculateResult(e) {
  e.preventDefault();

  nettoOrBrutto()

  const inputSumValue = inputSum.value;
  inputSumDisplay.innerHTML =
    inputSumValue > 0 ? inputSumValue + ' €' : '0.00 €';
  if (nettoToBrutto.checked === true && tax19percent.checked === true) {
    vatAmount.innerHTML = 'Mehrwertsteuerbetrag (19%)';
    outputVat.innerHTML = (inputSumValue * 0.19).toFixed(2) + ' €';
    endResult.innerHTML = (inputSumValue * 1.19).toFixed(2) + ' €';
  } else if (nettoToBrutto.checked === true && tax7percent.checked === true) {
    vatAmount.innerHTML = 'Mehrwertsteuerbetrag (7%)';
    outputVat.innerHTML = (inputSumValue * 0.07).toFixed(2) + ' €';
    endResult.innerHTML = (inputSumValue * 1.07).toFixed(2) + ' €';
  } else if (bruttoToNetto.checked === true && tax19percent.checked === true) {
    vatAmount.innerHTML = 'Mehrwertsteuerbetrag (19%)';
    outputVat.innerHTML =
      (inputSumValue - inputSumValue / 1.19).toFixed(2) + ' €';
    endResult.innerHTML = (inputSumValue / 1.19).toFixed(2) + ' €';
  } else {
    vatAmount.innerHTML = 'Mehrwertsteuerbetrag (7%)';
    outputVat.innerHTML =
      (inputSumValue - inputSumValue / 1.07).toFixed(2) + ' €';
    endResult.innerHTML = (inputSumValue / 1.07).toFixed(2) + ' €';
  }
  e.target.reset();
}

form.addEventListener('submit', calculateResult);
