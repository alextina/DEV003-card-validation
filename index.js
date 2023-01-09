import validator from './validator.js';

const buttonValidation = document.getElementById("validationButton");
buttonValidation.addEventListener("click", (e) => {
  e.preventDefault();
  const inputNumber = document.getElementById("credictCardNumber").value;
  if (inputNumber.length < 13) {
    alert(`Por favor, ingresa un número de tarjeta.`);
    return
  }
  const answer = validator.isValid(inputNumber);
  if (answer) {
    const validCard = (`La tarjeta ${validator.maskify(inputNumber)} es válida.`);
    const answerHtml = document.getElementById("credictCardResult");
    answerHtml.innerHTML = validCard;

  } else {
    const invalidCard = (`La tarjeta ${validator.maskify(inputNumber)} es inválida.`);
    const answerHtml = document.getElementById("credictCardResult");
    answerHtml.innerHTML = invalidCard;
  }
});