// Variables needed:

// Arrays for all password options
  // numbers
  // lower case letters
  // upper case letters
  // special characters

var numbers = [0,1,2,3,4,5,6,7,8,9]
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var characters = [ "!", "#", "$", "%", "&", "/", "<", ">", "?", "@", "^", "*", "(", ")", "{", "}", "~", "\"", "\\", "\'"]

// Input from user
  // Password length?
  // Include numbers?
  // Include lowercase letters?
  // Include uppercase letters?
  // Include special characters?


// Steps for generating password:

// Prompt user for password criteria
// Verify that length is between 8 and 128
// Verify that some kind of character choice has been selected
// Build array of desired password character options
// Randomly select character from this array and add on to password
// Repeat until password reaches requested length






// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
