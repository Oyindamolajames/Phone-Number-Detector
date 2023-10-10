// import the validate function 
import {ValidateForm} from './validate.js'

// select the container object
let imageBg = document.querySelector(".carrier-logo");
// What is input value?
let inputValue = document.querySelector("#number");

let carrierLogo = {
    'mtn': 'https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png',
    'glo': 'https://seeklogo.com/images/G/glo-limited-logo-9D0F432BA3-seeklogo.com.png',
    'airtel': 'https://seeklogo.com/images/A/airtel-logo-439F62AEA0-seeklogo.com.png',
    '9mobile': 'https://seeklogo.com/images/1/9mobile-logo-2A74C402E2-seeklogo.com.png'
  }

inputValue.addEventListener('keyup', () => {
    const phoneNumber = document.getElementById('number').value;
    const image = imageBg.querySelector('#logo');
    if (validatePhoneNumber(phoneNumber)){
        let carrier = checkCarrier(phoneNumber);
        let logo = carrierLogo[carrier];
        const imageElement = document.createElement('img');
        imageElement.src = logo;
        imageElement.alt = carrier + ' logo';
        imageElement.id = 'logo'
        // check if there is already a logo there
        if (image) {
          imageBg.replaceChild(imageElement, image)
        }else {
          imageBg.appendChild(imageElement)    
        }
        console.log('worked')
    } else {
      if (image) {
        imageBg.removeChild(image)    
      }
        
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
    return 'mtn';

  } else if (numberObj.isGloNumber()) {
    return 'glo';

  } else if (numberObj.isAirtelNumber()) {
    return 'airtel'

  } else if (numberObj.isNineMobileNumber()) {
    return '9mobile'
  }
}
  
