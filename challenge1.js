const readline = require("readline");

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getGrade(marks) {
  if (marks > 100 || marks < 0) {
    return "Invalid input. Enter a number between 0 and 100.";
  } else if (marks > 79) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else if (marks >= 49) {
    return "C";
  } else if (marks >= 40) {
    return "D";
  } else {
    return "E";
  }
}

// Prompt the user for input
rl.question("Enter the student's marks (0-100): ", (input) => {
  const marks = parseInt(input);
  if (isNaN(marks)) {
    console.log("Invalid input. Please enter a valid number.");
  } else {
    console.log(`The student's grade is: ${getGrade(marks)}`);
  }
  rl.close();
});

