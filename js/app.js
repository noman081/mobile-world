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