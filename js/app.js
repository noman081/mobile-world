function getInputField(inputFieldId) {
    const inputFieldText = document.getElementById(inputFieldId + '-field');
    const inputAmount = parseFloat(inputFieldText.value);
    if (isNaN(inputAmount)) {
        alert('Enter a valid amount for ' + inputFieldId.toUpperCase());
        return -1;
    }
    else if (inputAmount < 0) {
        alert('Enter a positive amount for ' + inputFieldId.toUpperCase());
        return -1;
    }
    else {
        return inputAmount;
    }
}


document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeAmount = getInputField('income');
    if (incomeAmount == -1) return;
    const foodAmount = getInputField('food');
    if (foodAmount == -1) return;
    const rentAmount = getInputField('rent');
    if (rentAmount == -1) return;
    const clothAmount = getInputField('cloth');
    // if (clothAmount == 0) return;

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