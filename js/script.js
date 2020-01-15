/*

We can choose between lenght, and character type. Using those criteria, we need to generate a random set of values.

1. the user selcts between the criteria
2. the computer generates the password
3. the password is displayed back to the user
4. the user can copy the password to clipboard

*/


// password container
var passwordContainer = document.getElementById('password');

// generates a unique password
function generatePassword() {
  var values = ['newpassword2000', 'newpassword2024', 'newpassword6756'];
  var index = Math.floor(Math.random()*values.length);
  var password = values[index];

  passwordContainer.value = password;
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
