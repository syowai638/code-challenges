
function calculateNetSalary(basicSalary, benefits) {
    
    const personalRelief = 2400; 
    const nssfRate = 0.06; 
    const nssfMax = 1800; 
    const nhifRates = [
      { limit: 5999, deduction: 150 },
      { limit: 7999, deduction: 300 },
      { limit: 11999, deduction: 400 },
      { limit: 14999, deduction: 500 },
      { limit: 19999, deduction: 600 },
      { limit: 24999, deduction: 750 },
      { limit: 29999, deduction: 850 },
      { limit: 34999, deduction: 900 },
      { limit: 39999, deduction: 950 },
      { limit: 44999, deduction: 1000 },
      { limit: 49999, deduction: 1100 },
      { limit: Infinity, deduction: 1500 },
    ];
  
    const taxBrackets = [
      { upTo: 24000, rate: 0.1 }, 
      { upTo: 32333, rate: 0.25 }, 
      { upTo: Infinity, rate: 0.3 }, 
    ];
  
    
    const grossSalary = basicSalary + benefits;
  
    
    let taxableIncome = grossSalary;
    let paye = 0;
  
    for (const bracket of taxBrackets) {
      if (taxableIncome > bracket.upTo) {
        paye += bracket.upTo * bracket.rate;
        taxableIncome -= bracket.upTo;
      } else {
        paye += taxableIncome * bracket.rate;
        break;
      }
    }
    paye = Math.max(0, paye - personalRelief); 
  
    
    const nhifDeduction = nhifRates.find(rate => grossSalary <= rate.limit)?.deduction || 1500;
  
    
    const nssfDeduction = Math.min(grossSalary * nssfRate, nssfMax);
  
    
    const netSalary = grossSalary - paye - nhifDeduction - nssfDeduction;
  
    return {
      grossSalary,
      paye,
      nhifDeduction,
      nssfDeduction,
      netSalary,
    };
  }
  
  // Example usage
  const basicSalary = 50000; // Example basic salary in KES
  const benefits = 10000; // Example benefits in KES
  
  const result = calculateNetSalary(basicSalary, benefits);
  
  console.log("Gross Salary:", result.grossSalary);
  console.log("PAYE (Tax):", result.paye);
  console.log("NHIF Deduction:", result.nhifDeduction);
  console.log("NSSF Deduction:", result.nssfDeduction);
  console.log("Net Salary:", result.netSalary);
  