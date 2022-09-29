// Magic Eight Ball

/* The user will be able to input a question, then our program will output a random fortune. */

// Defining the user name & greeting
const userName = "Jane";
userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);

// User Question
const userQuestion = "will it rain?";
console.log(`User asks ${userQuestion}`);

/* Create a control flow that takes in the randomNumber and then assigns eightBall to a reply that a Magic Eight Ball would return. */

const randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  default:
    eightBall = "Signs point to yes";
    break;
}
