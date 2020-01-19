/*

We can choose between lenght, and character type. Using those criteria, we need to generate a random set of values.

1. the user selcts between the criteria
2. the computer generates the password
3. the password is displayed back to the user
4. the user can copy the password to clipboard

*/

var passwordContainer = document.getElementById('password');

// user input
var lengthInput = document.getElementById('passwordLength');
var special = document.getElementById('specialCharacter');
var numbers = document.getElementById('numericCharacter');
var lower = document.getElementById('lowercaseCharacter');
var upper = document.getElementById('uppercaseCharacter');

// characters sets
var specialSet = '!@#$%^&*().;:?';
var numbersSet = '0123456789';
var uppercaseSet = 'QWERTYUIOPASDFGHJKLZXCVBNM';
var lowercaseSet = uppercaseSet.toLowerCase();

// when generate button is clicked
var generateBttn = document.getElementById('generateBttn');
generateBttn.addEventListener('click', inputHandler);


// user input handler
function inputHandler() {
  var checkbox = document.getElementsByClassName('checkbox');
  var checked = false;

  var characters = '';

  // check if the user clicked at least one option
  for (var i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      checked = true;
    }
  }

  // if any option is selected
  if (checked) {
    // manage user input
    (special.checked) ? characters += specialSet : '';
    (numbers.checked) ? characters += numbersSet : '';
    (lower.checked) ? characters += lowercaseSet : '';
    (upper.checked) ? characters += uppercaseSet : '';

    //pass the password to the textarea
    passwordContainer.value = passwordHandler(characters);
  }

  else {
    handleMessage('Please check at least one option.');
  }
}


// password handler
function passwordHandler(characters) {
  var password = '';
  // default password length is 8 characters
  var passwordLength = parseInt(lengthInput.value);

  // get a unique value as many times as the length set by user
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random()*characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}


// when copy button is clicked
var copyBttn = document.getElementById('copyBttn');
copyBttn.addEventListener('click', copyPassword);

// copy handler
function copyPassword() {
  if (passwordContainer.value) {
    passwordContainer.select();
    document.execCommand('copy');

    handleMessage('Password copied.');
  }

  else {
    handleMessage('No password to copy.');
  }
}


// message handler
var messageContainer = document.getElementById('messageContainer');
var message = document.getElementById('message');
var closeBttn = document.getElementById('closeBttn');

function handleMessage(text) {
  messageContainer.classList.remove('hide');
  // when close button is clicked, close the alert
  closeBttn.addEventListener('click', function() {
    messageContainer.classList.add('hide');
  })

  message.innerText = text;
}



// // password container
// var passwordContainer = document.getElementById('password');
// var password = '';
//
// // user input values
// var length = document.getElementById('passwordLength');
// var special = document.getElementById('specialCharacter').checked;
// var numbers = document.getElementById('numericCharacter').checked;
// var lower = document.getElementById('lowercaseCharacter').checked;
// var upper = document.getElementById('uppercaseCharacter').checked;
//
//
//
// // generates password handler
// function generatePassword() {
//   var userInput = document.getElementsByClassName('checkbox');
//   var isChecked;
//
//   // password values set
//   var specialSet = '!@#$%^&*().;:?';
//   var numbersSet = '0123456789';
//   var uppercaseSet = 'QWERTYUIOPASDFGHJKLZXCVBNM';
//   var lowercaseSet = uppercaseSet.toLowerCase();
//
//   for (var i = 0; i < userInput.length; i++) {
//     if (userInput[i].checked) {
//       isChecked = true;
//     }
//   }
//
//   if (isChecked) {
//     handlePassword();
//   }
//
//   else {
//     showAlert('Please choose at least one option.');
//   }
// }
//
//
// // copy password handler
// function copyPassword() {
//   if (passwordContainer.value) {
//     // copy to clipboard
//     passwordContainer.select();
//     document.execCommand('copy');
//
//     // sets message
//     showAlert('Password copied.');
//   }
//
//   else {
//     // sets message
//     showAlert('No password generated.');
//   }
// }
//
//
// // alert handler
// var alertContainer = document.querySelector('.alertContainer');
//
// // handle when to show the alert
// function showAlert(text) {
//   alertContainer.classList.remove("hide");
//
//   handleMessage(text);
// }
//
// // handle the alert message
// function handleMessage(text) {
//   var messageElement = document.getElementById('message');
//
//   messageElement.innerText = text;
// }
//
// // when close button is clicked close the alert
// function closeAlert() {
//   alertContainer.classList.add("hide");
// }
