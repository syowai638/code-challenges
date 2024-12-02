const readline = require("readline");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Enter the speed of the car (km/s): ", (speed) => {
  speed = Number(speed);


  
  if (isNaN(speed) || speed < 0) {
    console.log("Invalid input. Please enter a positive number.");
    rl.close();
    return;
  }


  const speedLimit = 70;
  const kmPerDemerit = 5;


  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);


    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }

  rl.close();
});

  