
function netSalaryCalculator() {
    const readline = require("readline");
  
   
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    
    rl.question("Enter your basic salary: ", (basicSalary) => {
      rl.question("Enter your benefits: ", (benefits) => {
        basicSalary = Number(basicSalary);
        benefits = Number(benefits);
  
       
        if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
          console.log("Invalid input. Please enter positive numbers.");
          rl.close();
          return;
        }
  
        
        const grossSalary = basicSalary + benefits;
  
        
        const payee = calculatePAYE(grossSalary);
  
        
        const nhifDeduction = calculateNHIF(grossSalary);
  
       
        const nssfDeduction = calculateNSSF();
  
        
        const totalDeductions = payee + nhifDeduction + nssfDeduction;
        const netSalary = grossSalary - totalDeductions;
  
        
        console.log(`Gross Salary: ${grossSalary}`);
        console.log(`PAYE (Tax): ${payee}`);
        console.log(`NHIF Deduction: ${nhifDeduction}`);
        console.log(`NSSF Deduction: ${nssfDeduction}`);
        console.log(`Net Salary: ${netSalary}`);
  
        rl.close();
      });
    });
  }
  
  
  function calculatePAYE(grossSalary) {
    let tax = 0;
  
    
    if (grossSalary <= 24000) {
      tax = grossSalary * 0.1; 
    } else if (grossSalary <= 32333) {
      tax = 24000 * 0.1 + (grossSalary - 24000) * 0.25;
    } else {
      tax = 24000 * 0.1 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.3;
    }
  
    return tax;
  }
  
  
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
  
  
  function calculateNSSF() {
   
    const tier1 = 360; 
    const tier2 = 720;
    return tier1 + tier2;
  }
  
 
  netSalaryCalculator();
  