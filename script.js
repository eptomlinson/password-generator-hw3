// Assignment Code - CREATION OF 1ST VARIABLE
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button - GIVE LIFE (FUNCATIONALITY) TO BUTTON IN THE HTML, MUST BE MOVED BEFORE writePASSWORD TO INFORM function
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input - CREATION OF VARIABLES WITHIN THE FUNCTION OF 1ST VARIABLE
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// ACTIVATE generatePASSWORD FUNCTION
function generatePassword(){
// LIST VARIABLES TO BE TRACKED BY BUTTON, USER INPUTS DATA:
  // var TBD
}
// HOW MANY OF EACH CHARACTER IS REQUIRED? TYPICALLY, IT IS ONE OF EACH:
var minimumCount = 1;

var minimumNumber = 1;
var minimumLowerCase = 1;
var minimumUpperCase = 1;
var minimum SpecialCharacters = 1;
// CHECK TO SEE IF VARS NEED TO BE STRINGS HERE ^^

