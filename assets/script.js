// Variables needed:
// Arrays for all password options
  // numbers
  // lower case letters
  // upper case letters
  // special characters

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var characters = [ "!", "#", "$", "%", "&", "/", "<", ">", "?", "@", "^", "*", "(", ")", "{", "}", "~", "\"", "\\", "\'"];

// Input from user
  // Password length?
  // Include numbers?
  // Include lowercase letters?
  // Include uppercase letters?
  // Include special characters?


// Steps for generating password:
// Prompt user for password criteria

var selectedLength;

prompt('Enter how many characters you want your password to contain:')

// Verify that selected length is between 8 and 128 (And that a number was entered)

if (( selectedLength < 8 ) || ( selectedLength > 128 )) {

  alert('Please choose a value between 8 and 128.')

} else if (( selectedLength > 7 ) && ( selectedLength < 128 )) {

  prompt('Would you like your password to contain numbers?')

}

// Verify that at least one category of character choice has been selected

if ( no categories are selected ) {

  alert('At least one kind of character must be selected. Please start over.')

}

// Build array of desired password character options

var userList = [ 1, 2, 3.. a, b, c.. ];

// Randomly select character from this array and add on to password

var indexPointer = Math.floor( Math.random()* userList.length);

var randomPick = userList [indexPointer];

// Repeat until password reaches requested length

for ( passwordLength = 0; passwordLength < selectedLength; passwordLength ++ ) {}





// Starter code:

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
