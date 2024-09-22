const calculateButton = document.getElementById('btn-calculate');
calculateButton.addEventListener('click',function(){
    // event.preventDefault();
    const income = parseFloat(document.getElementById('income').value)
    const software = parseFloat(document.getElementById('software').value)
    const courses = parseFloat(document.getElementById('courses').value)
    const internet = parseFloat(document.getElementById('internet').value)
    console.log(income, software, courses, internet);
    console.log({income, software, courses, internet});
    console.table({income, software, courses, internet});

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const totalExpensesEl = document.getElementById('total-expenses');
    totalExpensesEl.innerText = totalExpenses.toFixed(2);

    const balanceEl = document.getElementById('balance');
    balanceEl.innerText = balance.toFixed(2);

    console.table({totalExpenses, balance});
})