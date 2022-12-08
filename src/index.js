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
    alert("Tu tarjeta es válida.")
    }else{
    alert("Tu tarjeta es inválida.")
    }

//encontrar elemento p y agregarle texto

});

console.log(validator);

//no puedo pedirle un atributo a un string inputNumber es un string. Los unicos que tinen propiedad o atributos