// Arrays for all password options:
  // numbers
  // lower case letters
  // upper case letters
  // special characters

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var characters = [ "!", "#", "$", "%", "&", "/", "<", ">", "?", "@", "^", "*", "(", ")", "{", "}", "~", "\"", "\\", "\'"];


// Input from user:
  // Password length?
  // Include numbers?
  // Include lowercase letters?
  // Include uppercase letters?
  // Include special characters?

// Verify that selected length is between 8 and 128 (And that a number was entered)

function askQuestions() {

  var selectedLength = parseInt(
    prompt( 'Enter the desired length of your password:' )
  )

  if( Number.isNaN(selectedLength) ) {
    alert('Password length must be a number. Please start over.')
    return null;
  }

  if( selectedLength < 8 || selectedLength > 128 ) {
    alert('Password must be between 8 and 128 characters. Please start over.')
    return null;
  }

  var hasNumbers = confirm('Click OK to include numbers in your password.');
  
  var hasLowerLetters = confirm('Click OK to include lowercase letters in your password.');

  var hasUpperLetters = confirm('Click OK to include uppercase letters in your password.');

  var hasCharacters = confirm('Click OK to include special characters in your password.');

// Verify that at least one category of character options has been selected

  if(hasNumbers === false && hasLowerLetters === false && hasUpperLetters === false && hasCharacters === false) {
    alert('You must select at least one character option. Please start over.');
    return null;
  }

// Build array of desired password character options

  var options = {
    length: selectedLength,
    hasNumbers: hasNumbers,
    hasLowerLetters: hasLowerLetters,
    hasUpperLetters: hasUpperLetters,
    hasCharacters: hasCharacters,
  }
  return options;
}

// Randomly select character from this array, add on to password, and repeat until password reaches requested length

function randomNumber(arr) {
  var indexPointer = Math.floor( Math.random()* arr.length);
  var randomCharacter = arr[indexPointer];
  return randomCharacter;
}

function generatePassword() {
  var options = askQuestions();
  var result = [];
  var characterOptions = [];
  var guranteedOptions = [];

  if(options.hasNumbers) {
    characterOptions = characterOptions.concat(numbers);
    guranteedOptions.push(randomNumber(numbers));
  }

  if(options.hasLowerLetters) {
    characterOptions = characterOptions.concat(lowerLetters);
    guranteedOptions.push(randomNumber(lowerLetters));
  }

  if(options.hasUpperLetters) {
    characterOptions = characterOptions.concat(upperLetters);
    guranteedOptions.push(randomNumber(upperLetters));
  }

  if(options.hasCharacters) {
    characterOptions = characterOptions.concat(characters);
    guranteedOptions.push(randomNumber(characters));
  }

  for(var i = 0; i < options.length; i++) {
    var selectedCharacter = randomNumber(characterOptions);
    result.push(selectedCharacter);
  }


  for(var i = 0; i < guranteedOptions.length; i++) {
    result[i] = guranteedOptions[i]
  }

  console.log(result)
  return result.join('')
}

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
