const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message"); 
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextButton = document.querySelector("#next-button");
const hiddenContainer = document.querySelector("#hidden-container");
const cashErrorMessage = document.querySelector("#cash-error-message");
const returnTable = document.querySelector("#return-table");

const availableNotes = [2000,500,100,20,10,5,1];


nextButton.addEventListener("click", function checkAmount(){
    errorMessage.innerHTML ="";
    if(isNaN(billAmount.value)){
        errorMessage.innerHTML="Bill Amount Should be a Number!"
    }
    else if(billAmount.value>0){
       hiddenContainer.style.display ="block"
       nextButton.style.display="none"
    }
    else{
        errorMessage.innerHTML="Please Input a Valid Bill Amount!"
    }  
})

checkButton.addEventListener("click", function validateAmount(){
    errorMessage.innerHTML ="";
    cashErrorMessage.innerHTML="";
    returnTable.style.display="none";
        
    if(isNaN(cashAmount.value) || isNaN(billAmount.value)){
        cashErrorMessage.innerHTML="Cash & Bill Amount should be a number!"   
        returnTable.style.display="none";
    }
    else if(cashAmount.value<=0 || billAmount.value<=0){
            cashErrorMessage.innerHTML="Please Input a Valid Cash & Bill Amount!"
            returnTable.style.display="none";
        }else if(cashAmount.value===billAmount.value){
            cashErrorMessage.innerHTML="No Change Required! Full Amount Paid" 
            returnTable.style.display="none";
        }else{
        if(cashAmount.value<billAmount.value) {
            returnTable.style.display="none";
            cashErrorMessage.innerHTML="Cash Amount Should be Greater than the Bill Amount"
        }else {  
            const cashToBeReturned = cashAmount.value - billAmount.value;
            calculateChange(cashToBeReturned);
        } 
    }
    
    })


function calculateChange(amountToBeReturned){
    if(cashAmount.value<billAmount.value) {
        returnTable.style.display="none";
        cashErrorMessage.innerHTML="Cash Amount Should be Greater than the Bill Amount"
    }else{
    returnTable.style.display="block";
     for(let i =0; i<availableNotes.length; i++){
        const numberOfNotes= Math.trunc( amountToBeReturned/availableNotes[i]);
        noOfNotes[i].innerText = numberOfNotes;
        amountToBeReturned = amountToBeReturned%availableNotes[i];
     }
    }
}


