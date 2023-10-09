// 

export function ValidateForm (phoneNumber) {
    if (this instanceof ValidateForm === false) {
        return new ValidateForm(phoneNumber)
    }
    this.phoneNumber = phoneNumber;
}

ValidateForm.prototype.validateIfNumbersOnly = function () {
    // this function validates that only numbers are in the input field
     
    return /^[^A-Za-z]+$/.test(this.phoneNumber)
}

ValidateForm.prototype.getPhoneNumber = function () {
    console.log(this.phoneNumber)
}



/*
function MTN () {
    
}   

function Airtel () {

}
+
function Glo () {}

function Etisalat () {}
*/