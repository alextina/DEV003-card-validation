import validator from './validator.js';
// hacer que el botón haga una acción >> alert("Le di clic al botón.")
// const buttonMessage = document.getElementById("validationButton");
// buttonMessage.addEventListener("click",(e)=>{
//     e.preventDefault();
//     console.log("Le di clic al botón."); //solo funciona si lo pongo arriba
//     alert("Le di clic al botón.");
// }); 

//Esto SI funciona
//variable que utilizaremos para ejecutar el evento (id del botón)
const buttonValidation = document.getElementById("validationButton");
//variablequequeremosqueescuche.addEventListener("evento",acción que escucha);
buttonValidation.addEventListener("click", (e) => {
  e.preventDefault(); //cancela el evento y nos permite llamarlo cuando sea necesario
  //variable que nos permite acceder a la info brindada por el usuario (id del imput)
  const inputNumber = document.getElementById("credictCardNumber").value;
  //variable en la que aplicamos la función isValid (validator.isValid(inputNumber)<< llamamos a la función desde validator.js)
  const answer = validator.isValid(inputNumber);
  //crear un condicional para mostrarle una respuesta al usuario
  if (answer) { // >>> si answer === true entonces
    //variable que tiene alojado el texto que mostraremos al usuario
    const validCard = (`La tarjeta ${validator.maskify(inputNumber)} es válida.`);
    const answerHtml = document.getElementById("credictCardResult");
    answerHtml.innerHTML = validCard;
    //alert("Tu tarjeta es válida.")
  } else {
    //variable que tiene alojado el texto que mostraremos al usuario
    const invalidCard = (`La tarjeta ${validator.maskify(inputNumber)} es inválida.`);
    const answerHtml = document.getElementById("credictCardResult");
    answerHtml.innerHTML = invalidCard;
    //alert("Tu tarjeta es inválida.")
  }

});

//console.log(validator);