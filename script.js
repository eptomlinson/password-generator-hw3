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




// LIST VARIABLES TO BE TRACKED BY BUTTON

