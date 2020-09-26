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
// LIST VARIABLES TO BE TRACKED BY BUTTON, USER INPUTS DATA BASED ON QUESTIONS:
  var passwordLength = prompt("How many characters should be in this password?")
  var numbers = confirm("Should this password include numbers?")
  var upperCase = confirm("Should this password include upper case characters?")
  var lowerCase = confirm("Should this password include lower case characters?")
  var specialCharacters = confirm("Should special characters be included in this password?")

}
// HOW MANY OF EACH CHARACTER IS REQUIRED? TYPICALLY, WE WILL ALLOW WHATEVER CONFIGURATION OF PASSWORD THE USER DESIRES:
var minimumCount = 0;

var minimumNumber = "";
var minimumLowerCase = "";
var minimumUpperCase = "";
var minimum SpecialCharacters = "";
// CHECK TO SEE IF VARS NEED TO BE STRINGS HERE ^^


// ONCE PARAMETERES (DATA) HAVE BEEN ENTERED, PASSWORD NEEDS TO BE generatePassword. START BY SETTING UP NEW FUNCTION TO RANDOMIZE DATA. 
