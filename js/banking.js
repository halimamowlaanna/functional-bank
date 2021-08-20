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
function updateTotalField(tolalFieldId,newAmount){
    // debugger;
    const totalElement = document.getElementById(tolalFieldId);
    const previousTotalText = totalElement.innerText;
    const previousTotalAmount =parseFloat(previousTotalText);
    totalElement.innerText = previousTotalAmount + newAmount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText ;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    return previousBalanceTotal ;
}

function updateBalance(newAmount , isAdd)
{
    const balanceTotal = document.getElementById('balance-total');
    /*const previousBalanceText = balanceTotal.innerText ;
    const previousBalanceTotal = parseFloat(previousBalanceText); */
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + newAmount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - newAmount;
    }
}


    



//handle deposite button event
document.getElementById('deposite-button').addEventListener('click',function()
{
    //get the amount deposited
    /* const inputField = document.getElementById('deposite-input');
    const newDepositeText = inputField.value ;
    const newDepositeAmount = parseFloat(newDepositeText); */

    //get and update deposit total
    /* const depositeTotal = document.getElementById('deposite-total');
    const previousDepositeText = depositeTotal.innerText;
    const previousDepositeAmount =parseFloat(previousDepositeText);
    const newDepositeTotal = previousDepositeAmount + newDepositeAmount;
    depositeTotal.innerText = newDepositeTotal ; */

    //update account balance
    /* const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText ;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotal.innerText = newBalanceTotal ; */

    const newDepositeAmount = getInputValue('deposite-input');
    if(newDepositeAmount>0){
        updateTotalField('deposite-total',newDepositeAmount);
        updateBalance(newDepositeAmount,true);
    }
    
    
});


//handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click',function()
{
    //get the amount of withdraw
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value; 
    const newWithdrawAmount = parseFloat(withdrawAmountText); */
    
    //get and update withdraw total 
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText ;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const  newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal ; */

    //update account balance
    /* const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText ;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal ; */

    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(newWithdrawAmount>0 && newWithdrawAmount< currentBalance){
    updateTotalField('withdraw-total',newWithdrawAmount);
    updateBalance(newWithdrawAmount ,false);
    }
    if(newWithdrawAmount>currentBalance){
        console.log("Please withdraw less or equal to current balance")
    }
})