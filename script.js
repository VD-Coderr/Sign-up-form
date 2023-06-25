// Regular Expressions
const nameRegex = /^[a-zA-Z']{2,}$/; // minimum 2 characters, only alphabetical and apostrophe;
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;  // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character

// HTML elements
const nameInput = document.querySelectorAll('.name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordConfirmInput = document.querySelector('#confirm-password');
const submitBtn = document.querySelector('#submit');
const formHTML = document.querySelector('#sign-up-form');
const formInputs = formHTML.querySelectorAll('input');

let allTrue;

// function to validate input vs regex for each type
function validateInput(input, regex) {
  if (input.value.match(regex) || input.value.length === 0) {
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
  }
}

//name input validation
nameInput.forEach(input => {
  input.addEventListener('keyup', ()=> {
    validateInput(input, nameRegex)
  });
})

// email input validation
emailInput.addEventListener('keyup', ()=> {
  validateInput(emailInput, emailRegex)
});

// password input validation
passwordInput.addEventListener('keyup', ()=> {
  validateInput(passwordInput, passwordRegex);
  confirmPassowrd() // call to check if pw confirmation is correct (if user change password input later)
});

// validation of password confirmation input (without regex)
passwordConfirmInput.addEventListener('keyup', confirmPassowrd)

function confirmPassowrd() {
  if (passwordInput.value !== passwordConfirmInput.value) {
    passwordConfirmInput.classList.add('invalid');
  } else {
    passwordConfirmInput.classList.remove('invalid');
  }
}

formHTML.addEventListener('submit', (event)=> {
  event.preventDefault(); // not letting to submit (only frontend)

  for (let i = 0; i < formInputs.length; i++) {
    if (formInputs[i].classList.contains('invalid')) {
      alert('Please check your inputs. \nHold cursor on the input to see a hint');
      allTrue = false; // .invalid class found
      break; // to avoid multiple alerts
    } else {
      allTrue = true // .invalid class wasn't found
    }
  }
  // if all inputs didn't have .invalid class show final message
  if (allTrue) {
    alert("(Evil laugh): Thanks for all your data. \nNo, but seriously, probably shouldn't put your personal data on some unknown website.")
  }
})