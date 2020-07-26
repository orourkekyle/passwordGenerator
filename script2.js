// Assignment Code
var generateBtn = document.querySelector("#generate");

// 1. Change variable names to your own
// 2. Change the groups of code into functions and call/execute them at the right places
// 3. Modify or remove the comments

// ***********
// DATA
// ***********

// change the all varialbe names, comments, etc.
var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = "$#@!~^&*()_+[]{}"; // might need more 
var numStr = "0123456789";

// you could change varialbes into hard coded arrays such as ['a', 'b', ... ]
var lowerArray = "abcdefghijklmnopqrstuvwxyz".split("");
var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var specArray = "$#@!~^&*()_+[]{}".split(""); // could need modification
var numArray = "0123456789".split("");

// variables for store user's input
var confirmNumbers = false;
var confirmUpper = false;
var confirmLower = false;
var confirmSpecial = false;
//var chosenLength = 0;

var minPwdLen = 8;
var rawPwd = "";

// log to see the data
console.log(lowerArray);
console.log(upperArray);
console.log(specArray);
console.log(numArray);

// **************************
// USER INPUT - function ()?
// **************************
var chosenLength = prompt("Enter the length of your password");

function userConfirm() {
  // lengthTrue()
  var chosenLength = prompt("Enter the length of your password");
    while (chosenLength < minPwdLen) {
      alert("Length of password has to be greater than 8");
      var chosenLength = prompt("Enter the length of your password");
  } 
  confirmNumbers = confirm("Do you want numbers in your password?");
  confirmUpper = confirm("Do you want uppercase letters?");
  confirmLower = confirm("Do you want lowercase letters?");
  confirmSpecial = confirm("Do you want special characters?");

  if (confirmNumbers) {
    var allChar = Math.floor(Math.random() * numArray.length);
    rawPwd += numArray[allChar];
    // allChosenStr += numStr;
  }
  console.log(rawPwd);

  if (confirmUpper) {
    var allChar = Math.floor(Math.random() * upperArray.length);
    rawPwd += upperArray[allChar];
  }
  console.log(rawPwd);

  if (confirmLower) {
    var allChar = Math.floor(Math.random() * lowerArray.length);
    rawPwd += lowerArray[allChar];
  }
  console.log(rawPwd);

  if (confirmSpecial) {
    var allChar = Math.floor(Math.random() * specArray.length);
    rawPwd += specArray[allChar];
  }
  console.log(rawPwd);
}

// ***********
// MAIN LOGIC
// ***********

// you can make the following code into function () and call it at the appropriate place
// function() ? and/or 
// another function to handle random allChar and to add the char to an array 
// with the array passed as input argument

// Include in password at least one letter with the user's choices of numbers, special chars, uppercase and/or lowercase chars
// to meet user's requiremence

// Function: 
function generatePassword() {
  //var userPwdLen = chosenLength - rawPwd.length;
  var allChosenStr = "";

  userConfirm()

  for (var i = 0; i < chosenLength; i++) {
    allChosenStr.split("");
    var allChar = Math.floor(Math.random() * allChosenStr.length - 1);
    
    console.log(allChar);
  }
  // Randomize the order of chars in the password - can be skipped or add your own code
}

// Write password to the #password input
function displayPassword() {
  // could call your functions here below
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", displayPassword);