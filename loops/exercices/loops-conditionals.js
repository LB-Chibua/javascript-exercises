// ***************************************************************************
// ******* FOR EACH ELEMENT IN ARRAY, PRINT DEPENDING ON A CONDITION *********
// ***************************************************************************

// Hardcoding the value to check against
const snacks = [120, 390, 80];
for (let i = 0; i < snacks.length; i++) {
  if (snacks[i] < 150) {
    console.log("healthy");
  } else {
    console.log("unhealthy");
  }
}

// Check against global variable
const bulls = [33, 23, 8];
const jordan = 23;
for (let i = 0; i < bulls.length; i++) {
  if (bulls[i] === jordan) {
    console.log("Jordan");
  } else {
    console.log("keep looking");
  }
}

// Multiple conditions
const numberz = [-2, 0, 1, 2, 3];
for (let i = 0; i < numberz.length; i++) {
  if (numberz[i] < 0) {
    console.log("negative");
  } else if (numberz[i] === 0) {
    console.log("0");
  } else {
    console.log("positive");
  }
}

// Complex conditions with &&
const dipalo = [0, 1, 2, 10, 15, 18, 20, 37, 100];
for (let i = 0; i < dipalo.length; i++) {
  if (dipalo[i] <= 2) {
    console.log("infant");
  } else if (dipalo[i] >= 3 && dipalo[i] <= 17) {
    console.log("child");
  } else if (dipalo[i] >= 18) {
    console.log("adult");
  }
}

// Using modulo
const dingwaga = [1980, 1985, 1993, 2022];
for (let i = 0; i < dingwaga.length; i++) {
  if (dingwaga[i] % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

const sample = [2, 3, 4, 5, 6, 7];
for (let i = 0; i < sample.length; i++) {
  if (sample[i] % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

// Conditions based on strings: check if a string oontains a char
const mafoko = ["red", "bed", "jet", "bad"];
for (let i = 0; i < mafoko.length; i++) {
  if (mafoko[i].includes("e")) {
    console.log("true");
  } else {
    console.log("false");
  }
}

// Conditions based on strings: check if a string oontains a substring (word)
const dipina = ["rise again", "do or die", "dance all night long"];
for (let i = 0; i < dipina.length; i++) {
  if (dipina[i].includes("dance")) {
    console.log("dance song");
  }
}

// ***************************************************************************
// **** FOR EACH ELEMENT IN ARRAY, MANIPULATE IT DEPENDING ON A CONDITION ****
// ***************************************************************************

// Manipulate the element based on a condition
const rando = ["bat", "bet", "bot", "net", "brag", "bit", "mum", "bum"];
for (let i = 0; i < rando.length; i++) {
  if (rando[i].includes("a")) {
    console.log(rando[i].toUpperCase());
  } else if (rando[i].includes("e")) {
    console.log(rando[i]);
  }
}

// Manipulate a global variable based on a condition
const dingwaga2 = [42, 37, 34, 29, 24];
let evenNumbz = [];
let oddNumbz = [];

for (let i = 0; i < dingwaga2.length; i++) {
  if (dingwaga2[i] % 2 == 0) {
    evenNumbz.push(dingwaga2[i]);
  } else oddNumbz.push(dingwaga2[i]);
}

console.log(evenNumbz);
console.log(oddNumbz);

// Manipulate a global variable based on a condition
setswana = ["buka", "koloi", "kolobe", "notshi", "koko", "lerato", "puso"];
let puo = [];
for (let i = 0; i < setswana.length; i++) {
  if (setswana[i].length > 4) {
    puo.push(setswana[i]);
  }
}

console.log(puo);
