/*

We can choose between lenght, and character type. Using those criteria, we need to generate a random set of values.

1. the user selcts between the criteria
2. the computer generates the password
3. the password is displayed back to the user
4. the user can copy the password to clipboard

*/

var generateButton = document.querySelector('#generate');
var copyToClipboard = document.querySelector('#copy');

var passwordContainer = document.querySelector('#password');

function generatePassword() {
  var password = 'newpassword2000';

  passwordContainer.value = password;
}

function copyPassword() {
  if (passwordContainer.value) {
    passwordContainer.select();
    document.execCommand('copy');

    alert('copied password '+passwordContainer.value);
  }
}

generateButton.addEventListener('click', generatePassword);
copyToClipboard.addEventListener('click', copyPassword)
