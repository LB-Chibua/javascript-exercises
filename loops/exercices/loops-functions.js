// ***************************************************************************
// ***** GIVEN AN ARRAY, PRINT SMTH FOR EACH EL, DEPENDING ON A CONDITION ****
// ***************************************************************************

/* Write a function that takes an array of song titles, and for every song in it, it checks if it has the word "love" in the title.If it does not have that word in the title, print that the song is cool.If it does have the word in the title, print that the song is not cool. */

const dipina = (songTitles) => {
  for (let i = 0; i < songTitles.length; i++) {
    if (songTitles[i].includes("love ")) {
      console.log("cool");
    } else {
      console.log("not cool");
    }
  }
};

let testDataDipina = [
  "tiny dance",
  "love is in the air",
  "kiss kiss kiss",
  "love boat",
];
let tamiraData = ["love thyself", "sweet dreqms"];

dipina(testDataDipina);
console.log();
dipina(tamiraData);

console.log();
dipina(["if you wanna be my lover", "why ne"]);

/* Write a function that takes an array of song titles, and for every song in it, it checks if it has the word "love" in the title. If it does NOT have that word in the title, print that the song is cool. If it does have the word in the title, return "Sorry, not cool". */

const testData = ["jub-jub", "always", "love magic", "mambo", "big love"];

const getSong = (arrayOfTitles) => {
  for (let i = 0; i < arrayOfTitles.length; i++) {
    if (arrayOfTitles[i].includes("love")) {
      return "Sorry not cool";
    } else {
      console.log(i + ": song is cool");
    }
  }
};

getSong(testData);

// ***************************************************************************
// ************ GIVEN AN ARRAY AND 2ND ARG, CHECK FOR A CONDITION ************
// ***************************************************************************

/* Write a function that checks if you have won the lotto. It takes an integer (your number) and an array of integers (today’s winning numbers] as its two parameters. It should return true if the given lotto number is one of the winning numbers. You can use the example variables but your function should work even if we change their numbers. */
const myLottoNumber = 13;
const winningLottoNumbers = [15, 2, 99, 14, 13, 56];

const getLottoWinnings = (myLottoNumber, winningLottoNumbers) => {
  for (let i = 0; i < winningLottoNumbers.length; i++) {
    if (myLottoNumber === winningLottoNumbers[i]) {
      return true;
    }
  }
};

console.log(getLottoWinnings(13, [15, 2, 99, 14, 13, 56]));
console.log(getLottoWinnings(myLottoNumber, winningLottoNumbers));
