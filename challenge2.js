/// speedDetector.js

const readline = require("readline");

// Create an interface to read input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for the car's speed
rl.question("Enter the speed of the car (km/s): ", (speed) => {
  speed = Number(speed); // Convert input to a number

  // Validate input
  if (isNaN(speed) || speed < 0) {
    console.log("Invalid input. Please enter a positive number.");
    rl.close();
    return;
  }

  // Define speed limit
  const speedLimit = 70;
  const kmPerDemerit = 5;

  // Check speed
  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    // Calculate demerit points
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);

    // Output results
    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }

  rl.close(); // Close the input stream
});

  