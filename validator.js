const validator = {

  isValid: (credictCardNumber) => {
    const newCardNumber = credictCardNumber.split("").reverse().map(x => parseInt(x));
    let result = 0;
    for (let i = 0; i < newCardNumber.length; i++) {
      if (i % 2 === 0) {
        const noMultiply = (newCardNumber[i]);
        result += noMultiply;
      } else {
        const multiply = (newCardNumber[i] * 2);
        if (multiply >= 10) {
          result += multiply - 9;
        } else {
          result += multiply;
        }
      }
    }
    result = result % 10 === 0 ? true : false
    return result;
  },

  maskify: (credictCardNumber) => {
    const newCardNumber = credictCardNumber.split("");
    const size = newCardNumber.length;
    const lastPosition = size - 1;
    let resultMask = "";
    for (let i = 0; i <= lastPosition; i++) {
      if (i < size - 4) {
        const mask = ("#");
        resultMask += mask;
      } else {
        const unMask = (newCardNumber[i]);
        resultMask += unMask;
      }
    }
    return resultMask;
  }

};
export default validator;