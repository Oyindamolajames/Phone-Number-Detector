// import the validate function 
import {ValidateForm} from './validate.js'

// select the container object
let imageBg = document.querySelector(".container");
// What is input value?
let inputValue = document.querySelector("#number");
let submitBtn = document.querySelector('button')
console.log(submitBtn)
let carrierLogo = {
    'mtn': 'url(https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png)',
     
}

submitBtn.addEventListener('click', () => {
    const phoneNumber = document.getElementById('number').value;
    
    if (validatePhoneNumber(phoneNumber)){
        let carrier = checkCarrier(phoneNumber);
        let logo = carrierLogo[carrier];
        imageBg.style.backgroundImage = logo;
        console.log('worked')
    } else {
        console.log("didn't work")
    }
})

/** 
* Function to validate phone number
* @param {String} phoneNumber - The phone number to be validated
* @returns {Boolean} - true or false whether number is valid)

* @example
* const result = validatePhoneNumber(2347069639326);

*/
function validatePhoneNumber(phoneNumber){   
    // Create an instance of ValidateForm
    let numberObj = new ValidateForm(phoneNumber)

    // check if the number is complete (i.e up to 11 for (080s) and 9 for + 234) and if the field only contains numbers
    if (numberObj.isNumberComplete() && numberObj.validateIfNumbersOnly()) {
        return true;
    } 
    return false
}

// function to check the carrier of a number
function checkCarrier (phoneNumber) {
  const numberObj = new ValidateForm(phoneNumber);

  if (numberObj.isMtnNumber()) {
    

    return 'mtn'
  } else if (numberObj.isGloNumber()) {
    imageBg.style.backgroundImage = 'url(https://seeklogo.com/images/G/glo-limited-logo-9D0F432BA3-seeklogo.com.png)'
    return 'glo'
  } else if (numberObj.isAirtelNumber()) {
    
  imageBg.style.backgroundImage = 'url(https://seeklogo.com/images/A/airtel-logo-439F62AEA0-seeklogo.com.png)'
    return 'airtel'
  } else if (numberObj.isNineMobileNumber()) {
    imageBg.style.backgroundImage = 'url(https://seeklogo.com/images/1/9mobile-logo-2A74C402E2-seeklogo.com.png)'
    return '9mobile'
  }
}
  
