function getInputField(inputFieldId) {
    const inputFieldText = document.getElementById(inputFieldId + '-field');
    const inputAmount = parseFloat(inputFieldText.value);
    return inputAmount;
}


document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeAmount = getInputField('income');
    const foodAmount = getInputField('food');
    const rentAmount = getInputField('rent');
    const clothAmount = getInputField('cloth');

    const totalExpenses = foodAmount + rentAmount + clothAmount;
    const newBalance = incomeAmount - totalExpenses;

    document.getElementById('show-expenses').innerText = totalExpenses;
    document.getElementById('show-balance').innerText = newBalance;
})

document.getElementById('savings-button').addEventListener('click', function () {
    const savingsPercentage = getInputField('savings');
    const incomeAmount = getInputField('income');
    const currentBalanceText = document.getElementById('show-balance').innerText;
    const currentBalance = parseFloat(currentBalanceText);
    const savingsAmount = incomeAmount * (savingsPercentage / 100);
    const remainingBalance = currentBalance - savingsAmount;

    document.getElementById('show-savings').innerText = savingsAmount;
    document.getElementById('show-remaining').innerText = remainingBalance;
})