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
var lenPwdChosen = 0;

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

// lenPwdChosen = prompt("Enter the length of your password");
// while (lenPwdChosen < minPwdLen) {
//   alert("Length of password has to be greater than 6");
//   lenPwdChosen = prompt("Enter the length of your password");
// } 

// confirmNumbers = confirm("Do you want numbers in your password?");
// confirmUpper = confirm("Do you want uppercase letters?");
// confirmLower = confirm("Do you want lowercase letters?");
// confirmSpecial = confirm("Do you want special characters?");

// ***********
// MAIN LOGIC
// ***********

// you can make the following code into function () and call it at the appropriate place
// function() ? and/or 
// another function to handle random index and to add the char to an array 
// with the array passed as input argument

// Include in password at least one letter with the user's choices of numbers, special chars, uppercase and/or lowercase chars
// to meet user's requiremence
function confirmPass() {

  // lenPwdChosen = prompt("Enter the length of your password");
  while (lenPwdChosen < minPwdLen) {
    alert("Length of password has to be greater than 6");
    lenPwdChosen = prompt("Enter the length of your password");
} 

  confirmNumbers = confirm("Do you want numbers in your password?");
  confirmUpper = confirm("Do you want uppercase letters?");
  confirmLower = confirm("Do you want lowercase letters?");
  confirmSpecial = confirm("Do you want special characters?");

  if (confirmNumbers) {
    var index = Math.floor(Math.random() * numArray.length);
    rawPwd += numArray[index];
  }
  console.log(rawPwd);

  if (confirmUpper) {
    var index = Math.floor(Math.random() * upperArray.length);
    rawPwd += upperArray[index];
  }
  console.log(rawPwd);

  if (confirmLower) {
    var index = Math.floor(Math.random() * lowerArray.length);
    rawPwd += lowerArray[index];
  }
  console.log(rawPwd);

  if (confirmSpecial) {
    var index = Math.floor(Math.random() * specArray.length);
    rawPwd += specArray[index];
  }
  console.log(rawPwd);
}


// Function: 
function generatePassword() {
  var userPwdLen = lenPwdChosen;
  var allChosenStr = "";

  // you could call confirm function here
  confirmPass.call()
  // after implementing the required chars, create a string candidates of strings for random selections
  if (confirmNumbers) {
    allChosenStr += numStr;
  }
  if (confirmUpper) {
    allChosenStr += upperAlphabet;
  }
  if (confirmLower) {
    allChosenStr += lowerAlphabet;
  }
  if (confirmSpecial) {
    allChosenStr += specialChars;
  }
  console.log(allChosenStr);

  for (var i = 0; i < userPwdLen; i++) {
    var index = Math.floor(Math.random() * allChosenStr.length);
    rawPwd += allChosenStr[index]; // append to the existing password
  }
  console.log('Password before randomized order', rawPwd);

  // Randomize the order of chars in the password - can be skipped or add your own code
  var pwdArr = rawPwd.split("");
  var randomOrdered = [];
  randomOrdered.push(pwdArr[pwdArr.length - 1]);
  randomOrdered.push(pwdArr[pwdArr.length - 2]);
  for (var i = 0; i < (pwdArr.length - 2); i++) {
    randomOrdered.push(pwdArr[i]);
  };
  rawPwd = randomOrdered.join("");


  console.log("Final password", rawPwd);
  return rawPwd;
}

// Write password to the #password input
function writePassword() {
  // could call your functions here below


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);