const validator = {

isValid:(credictCardNumber) => {
let newCardNumber = credictCardNumber.split("");
let reversedCard = newCardNumber.reverse().map(x=>parseInt(x));
let result = 0;
for (let i = 0; i < reversedCard.length; i++) {
  if (i === 0 || i % 2 === 0) {
    let noMultiply = (reversedCard[i]);
    result += noMultiply;
  } else {
    let multiply = (reversedCard[i] * 2);
    if (multiply >= 10) {
      result += multiply - 9;
    } else {
      result += multiply;
    }
  }
}
result = result % 10 ? false : true
return result;
},

maskify:(credictCardNumber)=>{
  let newCardNumber = credictCardNumber.split("");
  let size = newCardNumber.length;
  let lastPosition = size - 1;
  //creando una variable que almacenará los datos
  result = "";
  //creando un loop para iterar un if else.
  for (let i = 0; i <= lastPosition; i++) {
    //si (i) es el total de posiciones - 4, ponerle la mascara #
    if (i < size - 4) {
      let mask = ("#")
      //console.log(mask);
      result += mask;
    } else {
      let unMask = (newCardNumber[i]);
      //console.log(unMask);
      result += unMask
    }
  }
  return result;
}

};
export default validator;

// //crear un prompt variable para la entrada del número de la tarjeta
// //let credictCardNumber ="4083952015263";
//let credictCardNumber = (prompt("Ingresar número de tarjeta"));

// //crear función "isValid" son el parámetro "cardNumber"
// function isValid (credictCardNumber){

//   //convertir el número en array para poder acceder a su posición a través del método "Array.from"
//let newCardNumber = (Array.from(credictCardNumber));
// //console.log(newCardNumber)

// //cambiar el orden del arreglo y además parsear el arreglo a través del método "map"
//let reversedCard = newCardNumber.reverse().map(x=>parseInt(x));
// //console.log(reversedCard);

// //crear la variable "result" que mostrara la suma de los elementos que cumplan las condiciones del algoritmo de luhn
// let result = 0;
// for (let i = 0; i < reversedCard.length; i++) {
//   if (i === 0 || i % 2 === 0) {
//     let noMultiply = (reversedCard[i]);
//     result += noMultiply;
//   } else {
//     let multiply = (reversedCard[i] * 2);
//     if (multiply >= 10) {
//       result += multiply - 9;
//     } else {
//       result += multiply;
//     }
//   }
// }
// //si no se cumple que el resultado es multiplo de 10 es falso, sino es verdadero
// result = result % 10 ? false : true
// return result;
// }
// alert(isValid(cardNumber));

