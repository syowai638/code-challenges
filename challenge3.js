// netSalaryCalculator.js

function netSalaryCalculator() {
    const readline = require("readline");
  
    // Create an interface for user input
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    // Prompt for input
    rl.question("Enter your basic salary: ", (basicSalary) => {
      rl.question("Enter your benefits: ", (benefits) => {
        basicSalary = Number(basicSalary);
        benefits = Number(benefits);
  
        // Validate inputs
        if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
          console.log("Invalid input. Please enter positive numbers.");
          rl.close();
          return;
        }
  
        // Calculate gross salary
        const grossSalary = basicSalary + benefits;
  
        // PAYE calculation based on tax brackets
        const payee = calculatePAYE(grossSalary);
  
        // NHIF deduction based on gross salary
        const nhifDeduction = calculateNHIF(grossSalary);
  
        // NSSF deduction
        const nssfDeduction = calculateNSSF();
  
        // Calculate net salary
        const totalDeductions = payee + nhifDeduction + nssfDeduction;
        const netSalary = grossSalary - totalDeductions;
  
        // Output results
        console.log(`Gross Salary: ${grossSalary}`);
        console.log(`PAYE (Tax): ${payee}`);
        console.log(`NHIF Deduction: ${nhifDeduction}`);
        console.log(`NSSF Deduction: ${nssfDeduction}`);
        console.log(`Net Salary: ${netSalary}`);
  
        rl.close();
      });
    });
  }
  
  // Helper function to calculate PAYE
  function calculatePAYE(grossSalary) {
    let tax = 0;
  
    // Use PAYE tax brackets (2024 example)
    if (grossSalary <= 24000) {
      tax = grossSalary * 0.1; // 10%
    } else if (grossSalary <= 32333) {
      tax = 24000 * 0.1 + (grossSalary - 24000) * 0.25; // 25% for the amount above 24,000
    } else {
      tax = 24000 * 0.1 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.3; // 30% for the amount above 32,333
    }
  
    return tax;
  }
  
  // Helper function to calculate NHIF deductions
  function calculateNHIF(grossSalary) {
    let deduction = 0;
  
    // NHIF rate table example (2024)
    if (grossSalary <= 5999) deduction = 150;
    else if (grossSalary <= 7999) deduction = 300;
    else if (grossSalary <= 11999) deduction = 400;
    else if (grossSalary <= 14999) deduction = 500;
    else if (grossSalary <= 19999) deduction = 600;
    else if (grossSalary <= 24999) deduction = 750;
    else if (grossSalary <= 29999) deduction = 850;
    else if (grossSalary <= 34999) deduction = 900;
    else if (grossSalary <= 39999) deduction = 950;
    else if (grossSalary <= 44999) deduction = 1000;
    else if (grossSalary <= 49999) deduction = 1100;
    else if (grossSalary <= 59999) deduction = 1200;
    else if (grossSalary <= 69999) deduction = 1300;
    else if (grossSalary <= 79999) deduction = 1400;
    else if (grossSalary <= 89999) deduction = 1500;
    else if (grossSalary <= 99999) deduction = 1600;
    else deduction = 1700;
  
    return deduction;
  }
  
  // Helper function to calculate NSSF deductions
  function calculateNSSF() {
    // Standardized NSSF rate (2024 example)
    const tier1 = 360; // Lower earnings limit
    const tier2 = 720; // Upper earnings limit
    return tier1 + tier2; // Total NSSF deduction
  }
  
  // Run the calculator
  netSalaryCalculator();
  