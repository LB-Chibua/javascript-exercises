// ***************************************************************************
// **************** REGULAR IF / ELSE IF / ELSE STATEMENTS *******************
// ***************************************************************************

/* Write a function that takes one parameter, a weekday. If the value given is Tuesday or Thursday, return the chore “Take out trash”.  If the value given is Wednesday or Friday, return the chore “Sweep bedroom”. For any other weekdays, return “No chores today!”. */

const chores = (weekday) => {
  if (weekday === "Tuesday" || weekday === "Thursday") {
    return "Take out trash";
  } else if (weekday === "Wednesday" || weekday === "Friday") {
    return "Sweep bedroom";
  } else {
    return "No chores today!";
  }
};
console.log(chores("Poo"));

// ***************************************************************************
// ************************* SWITCH STATEMENTS *******************************
// ***************************************************************************

/* Write a function that takes one parameter, a weekday. If the value given is Monday, return the chore “Take out trash”. If it is Tuesday, return “Send Alistair around”. If Wednesday, “Empty dishwasher”. If Thursday, “Do laundry”. If Friday, “Buy snacks”. If Saturday, “Make breakfast”. If Sunday, “Cook gravy”. Use the most suitable syntax for your conditional. */

const getChore = (weekday) => {
  switch (weekday) {
    case "Monday":
      return "Take out trash";
      break;
    case "Tuesday":
      return "Send Alistair around";
      break;
    case "Wednesday":
      return "Empty dishwasher";
      break;
    case "Thursday":
      return "Do laundry";
      break;
    case "Friday":
      return "Buy snacks";
      break;
    case "Saturday":
      return "Make breakfast";
      break;
    default:
      return "Cook gravy";
  }
};

console.log(getChore("Friday"));

// ***************************************************************************
// ************************** TERNARY OPERATORS ******************************
// ***************************************************************************

/* Write a function that takes one parameter, a weekday. If the value given is Monday, return the chore “Take out trash”. For any other weekdays, return “No chores today!”. Use the most suitable syntax for your conditional. */

let weekday = "Monday";
const chores1 = (weekday) =>
  weekday === "Monday"
    ? console.log("Take out trash")
    : console.log("No chores today!");
chores1(weekday);
chores1("Tuesday");

// ***************************************************************************
// **************** IF/ELSE STATEMENT WITH PROVIDED INPUTS *******************
// ***************************************************************************

/* Write a function that takes two parameters, both an integer between 1 and 6 (inclusive). In other words, the user is giving two dice values. If you get double sixes, return “Double sixes”. If you get a Yahtzee (1 and 2), return “Yahtzee”. For any other combination, return “Roll the dice again”. */

const diceRoll4 = (dieOne4, dieTwo4) => {
  if (dieOne4 && dieTwo4 === 6) {
    return "Double sixes";
  } else if (dieOne4 === 1 && dieTwo4 === 2) {
    return "Yahtzee";
  } else if (dieOne4 === 2 && dieTwo4 === 1) {
    return "Yahtzee";
  } else {
    return "Roll the dice again";
  }
};

// ***************************************************************************
// ******* IF/ELSE STATEMENT WITH RANDOMLY ASSIGNED LOCAL VARIABLES **********
// ***************************************************************************

/* Write a function that takes no parameters. Inside the function, assign two variables a random dice number between 1 and 6 (inclusive). In other words, the computer rolls the dice now.  If you get double sixes, return “Double sixes”. If you get a Yahtzee (1 and 2), return “Yahtzee”. For any other combination, return “Roll the dice again”. */

const diceRoll = () => {
  let dieOne = Math.floor(Math.random() * 6) + 1;
  let dieTwo = Math.floor(Math.random() * 6) + 1;
  if (dieOne && dieTwo === 6) {
    return "Double sixes";
  } else if (dieOne === 1 && dieTwo === 2) {
    return "Yahtzee";
  } else if (dieOne === 2 && dieTwo === 1) {
    return "Yahtzee";
  } else {
    return "Roll the dice again";
  }
};
