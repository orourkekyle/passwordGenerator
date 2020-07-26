// Assignment Code
var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specChar = "!@#$%^&*(){}[];:<>?/~=+";
var generateBtn = document.querySelector("#generate");
// var ---> array
var lowerArray = lowerAlphabet.split("");
var upperArray = upperAlphabet.split("");
var numArray = numbers.split("");
var specArray = specChar.split("");
// console.log(lowerArray);
// console.log(upperArray);
// console.log(numArray);
// console.log(specArray);
function createPassword() {
  var passLength = prompt("Enter desires password length.")
  var useLower = confirm("Would you like lower case letters in your password?")
  var useUpper = confirm("Would you like upper case letters in your password?")
  var useNum = confirm("Would you like numbers in your password?")
  var useSpec = confirm("Would you like special characters in your password?")

  if (useLower === true && useUpper === true && useNum === true && useSpec === true) {
    arrayPass = [];
    for (var i =0; i <= passLength; i++) {
      allChar = lowerArray.concat(upperArray, numArray, specArray);
      var char = allChar[Math.floor(Math.random() * allChar.length - 1)];
      arrayPass.push(char);
      console.log(char);
      // arrayPass = allChar[Math.floor(Math.random() * allChar.length -1)];
      // console.log(arrayPass);
      // console.log([1,2,3])
      // var strPass = arrayPass.join("");
      // console.log(strPass);
      // return strPass;
    }

  }
}
// Write password to the #password input
function writePassword() {
  var password = createPassword();
  document.getElementById("password").value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);