/* function doubleIt(num){
 const result = num *2 ;
 return result;
}
const first=doubleIt(2);
const second=doubleIt(5);
 */
function getInputValue(){
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeText = depositeInput.value ;
    const newDepositeAmount = parseFloat(newDepositeText);
    //clear the deposite input field
    depositeInput.value = '';
    return newDepositeAmount;
}



//handle deposite button event
document.getElementById('deposite-button').addEventListener('click',function(){
    //get the amount deposited
    /* const depositeInput = document.getElementById('deposite-input');
    const newDepositeText = depositeInput.value ;
    const newDepositeAmount = parseFloat(newDepositeText); */
    // console.log(depositeAmount);

    const newDepositeAmount = getInputValue();
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositeText = depositeTotal.innerText;
    const previousDepositeAmount =parseFloat(previousDepositeText);
    const newDepositeTotal = previousDepositeAmount + newDepositeAmount;
    depositeTotal.innerText = newDepositeTotal ;


    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText ;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotal.innerText = newBalanceTotal ;
    
    
});


//handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click',function(){
    console.log('hi');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value; 
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    //set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText ;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const  newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal ;

    //update account balance

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText ;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal ;

    //clear the withdraw input field
    withdrawInput.value = '';

    
})