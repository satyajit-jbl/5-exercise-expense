// add event listener for calculate button 

const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function(){
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    console.log(income, software, courses, internet);
    console.log({income, software, courses, internet});

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);

    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);

    const result = document.getElementById('results');
    result.classList.remove('hidden');

    const historyItem = document.createElement('div');
    historyItem.className = 
    "bg-white p-3 rounded-md border-1-2 border-indego-500";
    historyItem.innerHTML = `
    
    <p class = "text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    <p class = "text-xs text-gray-500">Income: $${income.toFixed(2)}</p>
    <p class = "text-xs text-gray-500">Expenses: $${totalExpenses.toFixed(2)}</p>
    <p class = "text-xs text-gray-500">Balance: $${balance.toFixed(2)}</p>
    
    `;
    const historyContainer = document.getElementById('history-list');

        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});


// add event listener for savings button 

const calculateSavingsButton = document.getElementById('calculate-savings');
calculateSavingsButton.addEventListener('click', function(){

    const savingPercentage = parseFloat(document.getElementById('savings').value);
   console.log(savingPercentage);

   const income = parseFloat(document.getElementById('income').value);
   const software = parseFloat(document.getElementById('software').value);
   const courses = parseFloat(document.getElementById('courses').value);
   const internet = parseFloat(document.getElementById('internet').value);
//    console.log(income, software, courses, internet);
//    console.log({income, software, courses, internet});

   const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savingAmount = (savingPercentage * balance) / 100;

    const remainingBalance = income - totalExpenses - savingAmount;

    console.log('savings amount is', savingAmount);

    const savingElement = document.getElementById('savings-amount');
        savingElement.innerText = savingAmount.toFixed(2);
    const remaingBalanceElement = document.getElementById('remaining-balance');
    remaingBalanceElement.innerText = remainingBalance.toFixed(2);

    
})

// history tab functionality

const historyTab = document.getElementById('history-tab')
const assistentTab = document.getElementById('assistant-tab')
historyTab.addEventListener('click', function(){

    historyTab.classList.add(
        'text-white', 
        'bg-gradient-to-r',
        'from-blue-500', 
        'to-purple-600'
    );
    historyTab.classList.remove('text-gray-600');

    assistentTab.classList.remove(
        'text-white', 
        'bg-gradient-to-r',
        'from-blue-500', 
        'to-purple-600'
    );
    assistentTab.classList.add('text-gray-600');
    document.getElementById('expense-form').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
})

// assistentTab.addEventListener('click', function(){
//     assistentTab.classList.add(
//         'text-white', 
//         'bg-gradient-to-r',
//         'from-blue-500', 
//         'to-purple-600'
//     );
//     historyTab.classList.remove(
//         'text-white', 
//         'bg-gradient-to-r',
//         'from-blue-500', 
//         'to-purple-600'
//     );

// })