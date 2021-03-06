const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextButton = document.querySelector("#next-button");
const hiddenContainer = document.querySelector("#hidden-container");
const cashErrorMessage = document.querySelector("#cash-error-message");
const amountReturnMessage = document.querySelector("#amount-return-message");
const returnTable = document.querySelector("#return-table");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


nextButton.addEventListener("click", function checkAmount() {
    errorMessage.innerHTML = "";
    if (isNaN(billAmount.value)) {
        errorMessage.innerHTML = "Bill Amount Should be a Number!"
        return;
    } else if (billAmount.value > 0) {
        hiddenContainer.style.display = "block"
        nextButton.style.display = "none"
    } else {
        errorMessage.innerHTML = "Please Input a Valid Bill Amount!"
        return;
    }
})

checkButton.addEventListener("click", function validateAmount() {
    errorMessage.innerHTML = "";
    cashErrorMessage.innerHTML = "";
    returnTable.style.display = "none";
    amountReturnMessage.innerText ="";

    if (isNaN(cashAmount.value) || isNaN(billAmount.value)) {
        cashErrorMessage.innerHTML = "Cash & Bill Amount should be a number!"
        returnTable.style.display = "none";
        amountReturnMessage.innerText ="";
        return;
    } else if (cashAmount.value <= 0 || billAmount.value <= 0) {
        cashErrorMessage.innerHTML = "Please Input a Valid Cash & Bill Amount!"
        returnTable.style.display = "none";
        amountReturnMessage.innerText ="";
        return;
    } else if (Number(cashAmount.value) === Number(billAmount.value)) {
        cashErrorMessage.innerHTML = "No Change Required! Full Amount Paid"
        returnTable.style.display = "none";
        amountReturnMessage.innerText ="";
        return;
    } else {
        if (Number(cashAmount.value) < Number(billAmount.value)) {
            returnTable.style.display = "none";
            amountReturnMessage.innerText ="";
            cashErrorMessage.innerHTML = "Cash Amount Should be Greater than the Bill Amount"
            return;
        } else {
            const cashToBeReturned = cashAmount.value - billAmount.value;
            amountReturnMessage.innerText ="Total amount to be returned is: "+cashToBeReturned;
            calculateChange(cashToBeReturned);
        }
    }

})


function calculateChange(amountToBeReturned) {
    if (Number(cashAmount.value) < Number(billAmount.value)) {
        returnTable.style.display = "none";
        amountReturnMessage.innerText ="";
        cashErrorMessage.innerHTML = "Cash Amount Should be Greater than the Bill Amount"
        return;
    } else {
        returnTable.style.display = "block";
        for (let i = 0; i < availableNotes.length; i++) {
            const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
            noOfNotes[i].innerText = numberOfNotes;
            amountToBeReturned = amountToBeReturned % availableNotes[i];
        }
    }
}