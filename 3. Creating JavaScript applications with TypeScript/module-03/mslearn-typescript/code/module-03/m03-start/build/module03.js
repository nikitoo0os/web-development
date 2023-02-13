"use strict";
/* Module 3: Implement interfaces in TypeScript
   Lab Start  */
/*  TODO: Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(LoanTerms) {
    // Calculates the monthly payment of an interest only loan
    let interest = (LoanTerms.interestRate / 1200); // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = LoanTerms.principle * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
/*  TODO: Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(LoanTerms) {
    // Calculates the monthly payment of a conventional loan
    let interest = LoanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = LoanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), LoanTerms.month)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
let interestOnlyPayment = calculateInterestOnlyLoanPayment({ principle: 30000, interestRate: 5 });
let conventionalPayment = calculateConventionalLoanPayment({ principle: 30000, interestRate: 5, month: 180 });
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24" 
