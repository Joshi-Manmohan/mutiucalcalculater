document.getElementById('calculate').addEventListener('click', function () {
    const initialInvestment = parseFloat(document.getElementById('initial-investment').value) || 0;
    const monthlyContribution = parseFloat(document.getElementById('monthly-contribution').value) || 0;
    const annualInterestRate = parseFloat(document.getElementById('annual-interest-rate').value) / 100 || 0;
    const numberOfYears = parseFloat(document.getElementById('number-of-years').value) || 0;

    const months = numberOfYears * 12;
    const monthlyInterestRate = annualInterestRate / 12;

    let totalAmount = initialInvestment;
    for (let i = 0; i < months; i++) {
        totalAmount = (totalAmount + monthlyContribution) * (1 + monthlyInterestRate);
    }

    const totalInvested = initialInvestment + (monthlyContribution * months);
    const compoundInterest = totalAmount - totalInvested;

    document.getElementById('total-amount').innerText = `Total Amount: ₹${totalAmount.toFixed(2)}`;
    document.getElementById('total-invested').innerText = `Total Invested: ₹${totalInvested.toFixed(2)}`;
    document.getElementById('compound-interest').innerText = `Compound Interest Earned: ₹${compoundInterest.toFixed(2)}`;
});