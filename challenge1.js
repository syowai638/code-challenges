function getGrade () {
    let marks = parseInt(prompt("Enter the student's marks (0-100): "));

    if (isNaN(marks) || marks > 100 ) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
    }
}