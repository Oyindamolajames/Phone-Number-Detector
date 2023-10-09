import { ValidateForm } from "./src/validateNumber.js";

let phoneNumberField = document.getElementById('number');


let submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
    let phoneNumber = phoneNumberField.value;
    let numberObject = ValidateForm(phoneNumber);
    if (numberObject.validateIfNumbersOnly()) {
        if (numberObject.isMtnNumber()) {
            console.log("mtn")
        } else {
            console.log('')
        }
    }else {
        console.log('not numbers only')
    }
}) 
