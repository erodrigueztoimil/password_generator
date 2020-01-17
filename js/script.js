/*

We can choose between lenght, and character type. Using those criteria, we need to generate a random set of values.

1. the user selcts between the criteria
2. the computer generates the password
3. the password is displayed back to the user
4. the user can copy the password to clipboard

*/


// password container
var passwordContainer = document.getElementById('password');
var password = '';

// user input values
var length = document.getElementById('passwordLength');
var special = document.getElementById('specialCharacter').checked;
var numbers = document.getElementById('numericCharacter').checked;
var lower = document.getElementById('lowercaseCharacter').checked;
var upper = document.getElementById('uppercaseCharacter').checked;

// generates password handler
function generatePassword(special, numbers, lower, upper) {
  var userInput = document.getElementsByClassName('checkbox');
  var isChecked;

  // password values set
  var specialSet = '!@#$%^&*().;:?';
  var numbersSet = '0123456789';
  var uppercaseSet = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  var lowercaseSet = uppercaseSet.toLowerCase();

  for (var i = 0; i < userInput.length; i++) {
    if (userInput[i].checked) {
      isChecked = true;
    }
  }

  if (isChecked) {
    password = 'password';
    
    passwordContainer.value = password;
  }

  else {
    showAlert('Please choose at least one option.');
  }
}


// copy password handler
function copyPassword() {
  if (passwordContainer.value) {
    // copy to clipboard
    passwordContainer.select();
    document.execCommand('copy');

    // sets message
    showAlert('Password copied.');
  }

  else {
    // sets message
    showAlert('No password generated.');
  }
}


// alert handler
var alertContainer = document.querySelector('.alertContainer');

// handle when to show the alert
function showAlert(text) {
  alertContainer.classList.remove("hide");

  handleMessage(text);
}

// handle the alert message
function handleMessage(text) {
  var messageElement = document.getElementById('message');

  messageElement.innerText = text;
}

// when close button is clicked close the alert
function closeAlert() {
  alertContainer.classList.add("hide");
}
