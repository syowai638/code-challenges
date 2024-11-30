// speedDetector.js

function speedDetector() {
    // Prompt user for speed input
    let speed = prompt("Enter the speed of the car (km/s):");
    speed = Number(speed); // Convert input to a number
  
    // Validate input
    if (isNaN(speed) || speed < 0) {
      console.log("Invalid input. Please enter a positive number.");
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
  }
  
  // Call the function
  speedDetector();
  