// ***************************************************************************
// ************************ GLOBAL VS LOCAL SCOPE ****************************
// ***************************************************************************

const input = 8;
const controlVal = input / 2 + 3;

const multiplier = (number, phase) => {
  const test = 3;
  const val = number * controlVal + phase;
  console.log(val);
};

multiplier(3, 1);
console.log(input);
console.log(number);
console.log(controlVal);
