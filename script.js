// // Assignment Code - LINK BUTTON WITH ID FOR BUTTON IN HTML. START BY TELLING COMPUTER THERE IS A BUTTON
// var generateButton = document.querySelector("#generate");
// // Add event listener to generate button - GIVE FUNCATIONALITY TO BUTTON IN THE HTML, MUST BE MOVED BEFORE writePASSWORD TO INFORM function
// generateBtn.addEventListener("click", writePassword)
// // Write password to the #password input - CREATION OF VARIABLES WITHIN THE FUNCTION OF 1ST VARIABLE
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }
// // ACTIVATE generatePASSWORD FUNCTION BY GIVING IT VARS OF ITS OWN
// function generatePassword(){
// // LIST VARIABLES TO BE TRACKED BY BUTTON, USER INPUTS DATA BASED ON QUESTIONS:
var length = prompt("How many characters should be in this password?")
var numbers = confirm("Should this password include numbers?")
var upperCase = confirm("Should this password include upper case characters?")
var lowerCase = confirm("Should this password include lower case characters?")
var specialCharacters = confirm("Should this password include special characters, such as $, %, @, ect.?")

generatebtn.addEventListener("click", writePassword)

// https://www.youtube.com/watch?v=9sT03jEwcaw  SOURCE

// GEN PASSWORD 
function generate(){

  // SET PASSWORD PARAMETERS
  var generateButton = document.querySelector("#generate")

  const values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+";

  let password = "";

  // CREATE FOR LOOP TO GEN CHARACTERS

  for(var i = 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  // ADD PASSWORD TO TEXT BOX 

  document.getElementById("#generate").values = password;
}

