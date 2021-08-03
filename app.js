const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message"); 

checkButton.addEventListener("click", function validateAmount(){
    errorMessage.innerHTML ="";
    if(billAmount.value>0){
        if(cashAmount.value>=billAmount.value){
            const cashToBeReturned = cashAmount.value - billAmount.value;
            calculateChange(cashToBeReturned);
        }else{
            errorMessage.innerHTML="Cash Amount Should be Greater or Equal to the Bill Amount"
        }
    }else{
        errorMessage.innerHTML="Please Input a Valid Bill Amount!"
    }
    
})

function calculateChange(amountToBeReturned){
     

}


