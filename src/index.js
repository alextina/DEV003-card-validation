import validator from './validator.js';
// hacer que el botón haga una acción >> alert("Le di clic al botón.")
// const buttonMessage = document.getElementById("validationButton");
// buttonMessage.addEventListener("click",(e)=>{
//     e.preventDefault();
//     console.log("Le di clic al botón."); //solo funciona si lo pongo arriba
//     alert("Le di clic al botón.");
// }); 

//Esto SI funciona pero con el arrow function no funciona lo que puse en input, debo convertirlo en una función.
//variable que utilizaremos para ejecutar el evento (id del botón)
const buttonValidation = document.getElementById("validationButton");
//variablequequeremosqueescuche.addEventListener("evento",acción que escucha);
buttonValidation.addEventListener("click", (e) => {
  
  e.preventDefault(); //cancela el evento y nos permite llamarlo cuando sea necesario
  //variable que nos permite acceder a la info brindada por el usuario (id del imput)
  const inputNumber = document.getElementById("credictCardNumber").value;
  //variable en la que aplicamos la función isValid (validator.isValid(inputNumber)<< llamamos a la función desde validator.js)
  //si la variable inputNumber esta vacia, es menor a 13 o no es un npumero, entonces mandar una alerta
  // return termina la funcion, de lo contrario contínua el flujo
  if (inputNumber.length < 13) {
    alert(`Por favor, ingresa un número de tarjeta.`);
    return 
  } 
  // si la variable no es un numero, entonces terminar la función
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