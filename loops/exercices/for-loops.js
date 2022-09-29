// ***************************************************************************
// **************** FOR EACH ELEMENT IN AN ARRAY, PRINT IT *******************
// ***************************************************************************

const stuff = ["a", "b", "c"];
// print every element in the array
for (let i = 0; i < stuff.length; i++) {
  console.log(stuff[i]);
}

const tingz = ["x", "y", "z"];
for (let i = 0; i < tingz.length; i++) {
  console.log(tingz[i]);
}

// ***************************************************************************
// ******* FOR EACH ELEMENT IN AN ARRAY, MANIPULATE IT THEN PRINT IT *********
// ***************************************************************************

const number = [1, 2, 3];
for (let i = 0; i < number.length; i++) {
  console.log(number[i] + 5);
}

const lakers = [2, 4, 6];
for (let i = 0; i < lakers.length; i++) {
  console.log(lakers[i] * 0.5);
}

const numbers = ["3", "6", "9"];
for (let i = 0; i < numbers.length; i++) {
  let numberMuliplied = numbers[i] * 2;
  console.log(numberMuliplied);
}

const insults = ["fuck", "shit", "sebono"];
for (let i = 0; i < insults.length; i++) {
  console.log(insults[i].toUpperCase());
}

const ditiro = ["moreki", "lesole", "ngaka"];
for (let i = 0; i < ditiro.length; i++) {
  console.log(ditiro[i].toLowerCase());
}

// ***************************************************************************
// ******* FOR EACH ELEMENT IN AN ARRAY, MANIPULATE A GLOBAL VARIABLE ********
// ***************************************************************************

const numbers1 = [4, 5, 6];
// Global variable:
let sum = 0;
// Loop:
for (let i = 0; i < numbers1.length; i++) {
  sum = sum + numbers1[i];
}
console.log(sum);

const itemz = ["d", "e", "f"];
let emptyz = [];
for (let i = 0; i < itemz.length; i++) {
  emptyz.push(itemz[i]);
  console.log(emptyz);
}
console.log(emptyz);

const celtics = [1, 2, 3];
let newTeam = [];
for (let i = 0; i < celtics.length; i++) {
  newTeam.unshift(celtics[i]);
  console.log(newTeam);
}

// ***************************************************************************
// ********************** ITERATING DIFFERENTLY WITH I ***********************
// ***************************************************************************

// Executing the code block for every two elements
const maungo = ["namuni", "legapu", "apole", "moretlwa"];
for (let i = 0; i < maungo.length; i = i + 2) {
  console.log(maungo[i].length);
}

// Making i start at a different starting position
const merogo = [
  "anyanse",
  "tapole",
  "morogo",
  "tamati",
  "lephutsi",
  "mmidi",
  "khabeche",
];
for (let i = 1; i < merogo.length; i = i + 2) {
  console.log(merogo[i]);
}

// Looping backwards
const merogo1 = [
  "anyanse",
  "tapole",
  "morogo",
  "tamati",
  "lephutsi",
  "mmidi",
  "khabeche",
];
for (let i = merogo1.length - 1; i >= 0; i = i - 1) {
  console.log(merogo1[i]);
}

// Looping backwards, shorthand for i--
const furnitura = ["setilo", "tafole", "ntlo", "lebati", "bolao", "kamore"];
for (let i = furnitura.length - 1; i >= 0; i = i--) {
  console.log("1 " + furnitura[i]);
}

// Looping backwards and manipulating a global variable
malatsi = [
  "mosuplogo",
  "labobedi",
  "laboraro",
  "labone",
  "labotlhano",
  "matlhatso",
  "tshipi",
];
malatsi2 = [];

for (let i = malatsi.length - 1; i >= 0; i--) {
  malatsi2.push(malatsi[i]);
}

console.log(malatsi2);

// ***************************************************************************
// *********************** USING I IN  DIFFERENT WAYS ************************
// ***************************************************************************

// Use i when you needs its value, not only the element at position i of the array
const furnitura2 = ["setilo", "tafole", "ntlo", "lebati", "bolao", "kamore"];
for (let i = 0; i < furnitura2.length; i = i + 1) {
  console.log(i + " " + furnitura2[i]);
}

// Not using i at all
const furnitura4 = ["setilo", "tafole", "ntlo", "lebati", "bolao", "kamore"];
for (let i = 0; i < furnitura4.length; i = i + 1) {
  console.log("Tamira");
}
