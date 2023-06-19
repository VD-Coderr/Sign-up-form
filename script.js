const nameRegex = /^[a-zA-Z']{2,}$/; // minimum 2 characters, only alphabetical and apostrophe;
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;  // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character

const nameInput = document.querySelectorAll('.name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordConfirmInput = document.querySelector('#confirm-password');

const submitBtn = document.querySelector('#submit');

function validateInput(input, regex) {
  if (input.value.match(regex) || input.value.length  === 0) {
    input.classList.remove('invalid');
    console.log(input.value)
  } else {
    input.classList.add('invalid');
    console.log(input.value)
  }
}

nameInput.forEach(input => {
  input.addEventListener('keyup', ()=> {
    validateInput(input, nameRegex)
  });
})

emailInput.addEventListener('keyup', ()=> {
  validateInput(emailInput, emailRegex)
});

passwordInput.addEventListener('keyup', ()=> {
  validateInput(passwordInput, passwordRegex)
});

passwordConfirmInput.addEventListener('keyup', ()=> {
  if (passwordInput.value !== passwordConfirmInput.value) {
    passwordConfirmInput.classList.add('invalid');
  } else {
    passwordConfirmInput.classList.remove('invalid');
  }
})
