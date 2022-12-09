import validator from './validator.js';

// const buttonMessage = document.getElementById("validationButton");
// buttonMessage.addEventListener("click",(e)=>{
//     e.preventDefault();
//     console.log("Le di clic al botón."); //solo funciona si lo pongo arriba
//     alert("Le di clic al botón.");
// });

const buttonValidation = document.getElementById("validationButton");
buttonValidation.addEventListener("click",(e) => {
    e.preventDefault();
    const inputNumber = document.getElementById("credictCardNumber").value;
    console.log(inputNumber);
    const answer = validator.isValid(inputNumber);
    //crear un condicional para mostrarle una respuesta al usuario
    if (answer){
    let validCard = (`La tarjeta ${inputNumber} es válida.`);
    const answerHtml = document.getElementById("credictCardResult");
    answerHtml.innerHTML = validCard;
    //alert("Tu tarjeta es válida.")
    }else{
    let invalidCard = (`La tarjeta ${inputNumber} es inválida.`);
    const answerHtml = document.getElementById("credictCardResult");
    answerHtml.innerHTML = invalidCard;
    //alert("Tu tarjeta es inválida.")
    }

//encontrar elemento p y agregarle texto
// const answerHtml = document.getElementById("credictCardResult");
// answerHtml.innerHTML = answer;

});

console.log(validator);