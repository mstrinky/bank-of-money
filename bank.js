document.getElementById('calculate').addEventListener('click',function(){
    const incomeField = document.getElementById('income');
    const incomeString = incomeField.value ;
    const income = parseInt(incomeString);
    
    const foodField = document.getElementById('food');
    const foodString = foodField.value;
    const food = parseInt(foodString);

    const rantField = document.getElementById('rant');
    const rantString = rantField.value;
    const rant = parseInt(rantString);

    const clothField = document.getElementById('cloth');
    const clothString = clothField.value;
    const cloth = parseInt(clothString);

    const totalExpense = food + rant + cloth;
    // console.log(totalExpense);

    const totalExpenseField = document.getElementById('total-expenses');
    totalExpenseField.innerText = totalExpense;

    const balanceField = document.getElementById('balance');
    const balance = income - totalExpense ;
    balanceField.innerText = balance;

})