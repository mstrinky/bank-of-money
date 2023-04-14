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

    let balanceField = document.getElementById('balance');
    const balance = income - totalExpense ;
    balanceField.innerText = balance;

})



document.getElementById('save').addEventListener('click',function(){
    const balanceField = document.getElementById('balance');
    const balanceString= balanceField.innerText;
    const balanceNumber = parseInt(balanceString);
//    console.log(balanceNumber);
  

    const saveAmount = document.getElementById('amountof-save');
    const saveAmountString = saveAmount.value;
    // console.log(saveAmountString,balanceNumber);
    
    
     const saveMoney = balanceNumber * saveAmountString/100;
     const savingAmount = document.getElementById('saving-amount');
     savingAmount.innerText = saveMoney;
    

     const remainingBalance = balanceNumber - saveMoney;
     const remainingBalanceField = document.getElementById('remaining-balance');
     remainingBalanceField.innerText = remainingBalance;
})