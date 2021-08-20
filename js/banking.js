/* function doubleIt(num){
 const result = num *2 ;
 return result;
}
const first=doubleIt(2);
const second=doubleIt(5);
 */
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value ;
    const amountValue = parseFloat(inputAmountText);
    //clear the deposite input field
    inputField.value = '';
    return amountValue;
}
function updateTotalField(tolalFieldId,newDepositeAmount){
    const depositeTotal = document.getElementById(tolalFieldId);
    const previousDepositeText = depositeTotal.innerText;
    const previousDepositeAmount =parseFloat(previousDepositeText);
    const newDepositeTotal = previousDepositeAmount + newDepositeAmount;
    depositeTotal.innerText = newDepositeTotal ;
}



//handle deposite button event
document.getElementById('deposite-button').addEventListener('click',function(){
    //get the amount deposited
    /* const inputField = document.getElementById('deposite-input');
    const newDepositeText = inputField.value ;
    const newDepositeAmount = parseFloat(newDepositeText); */

    const newDepositeAmount = getInputValue('deposite-input');
    //get and update deposit total
    /* const depositeTotal = document.getElementById('deposite-total');
    const previousDepositeText = depositeTotal.innerText;
    const previousDepositeAmount =parseFloat(previousDepositeText);
    const newDepositeTotal = previousDepositeAmount + newDepositeAmount;
    depositeTotal.innerText = newDepositeTotal ; */

    updateTotalField('deposite-total',newDepositeAmount);


    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText ;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotal.innerText = newBalanceTotal ;
    
    
});


//handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click',function(){

    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value; 
    const newWithdrawAmount = parseFloat(withdrawAmountText); */
    const newWithdrawAmount = getInputValue('withdraw-input');
    //get and update withdraw total 
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

  

    
})